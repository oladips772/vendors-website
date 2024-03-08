/** @format */
import axios from "axios";
import URI from "./url";

const getKey = async () => {
  try {
    const { data } = await axios.get(`${URI}/api/image/get-key`);
    return data;
  } catch (error) {
    console.error("Error fetching key:", error);
    throw error;
  }
};

const ClarifyImage = async (imageUrl) => {
  try {
    const key = await getKey();
    const endpoint = "https://api.imagga.com/v2/tags";
    const headers = new Headers();
    headers.append("Authorization", `Basic ${key}`);

    const params = new URLSearchParams({ image_url: imageUrl });

    const response = await fetch(`${endpoint}?${params.toString()}`, {
      method: "GET",
      headers: headers,
    });

    if (!response.ok) {
      throw new Error("API request failed");
    }

    const data = await response.json();

    if (data && data.result && data.result.tags) {
      const tags = data.result.tags.map((tag) => tag.tag.en.toLowerCase());

      const foodKeywords = [
        "food",
        "meal",
        "cuisine",
        "dish",
        "snack",
        "drink",
        "beverage",
        "breakfast",
        "lunch",
        "dinner",
        "appetizer",
        "dessert",
        "fruit",
        "vegetable",
        "protein",
      ];

      const isFoodImage = tags.some((tag) => foodKeywords.includes(tag));
      return isFoodImage;
    } else {
      console.log("No tags found in the API response.");
      return false;
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export default ClarifyImage;
