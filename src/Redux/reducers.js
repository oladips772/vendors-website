/** @format */
import { combineReducers } from "redux";
import { FetchCategoriesReducer } from "./reducers/CategoryReducer";
import {
  createMealReducer,
  deleteMealReducer,
  getMealsReducer,
  updateMealReducer,
} from "./reducers/MealReducer";
import { messageReducer, SendMessageReducer } from "./reducers/MessageReducer";
import {
  acceptOrderReducer,
  completedOrdersReducer,
  deliverOrderReducer,
  orderDetailsReducer,
  orderListReducer,
  orderOnTheWayOrderReducer,
  pendingOrdersReducer,
  preparingOrderReducer,
  readyForPickUpOrderReducer,
  rejectOrderReducer,
  searchOrderReducer,
} from "./reducers/OrderReducer";
import { GetPaymentsReducer } from "./reducers/PaymentReducer";
import {
  postCreateReducer,
  postDeleteReducer,
  postsListReducer,
} from "./reducers/PostReducer";
import {
  createRestaurantReducer,
  getMyRestaurantsReducer,
  getRestaurantMealsReducer,
  getRestaurantOrderReducer,
  getRestaurantPostsReducer,
  updateRestaurantReducer,
} from "./reducers/RestaurantReducer";
import {
  GetLocalGovernmentReducer,
  GetStateReducer,
} from "./reducers/StateReducer";
import {
  resetPasswordReducer,
  updateVendorReducer,
  vendorForgotReducer,
  vendorLoginReducer,
  vendorRegisterReducer,
  verifyTokenReducer,
} from "./reducers/VendorReducer";
import {
  CreateCouponReducer,
  DeleteCouponReducer,
  EditCouponReducer,
  FreezeCouponReducer,
  GetCouponsReducer,
  UnFreezeCouponReducer,
} from "./reducers/CouponReducer";

const rootReducer = combineReducers({
  orderList: orderListReducer,
  orderDetails: orderDetailsReducer,
  orderAccept: acceptOrderReducer,
  orderReject: rejectOrderReducer,
  orderPrepare: preparingOrderReducer,
  orderDelivered: deliverOrderReducer,
  orderReadyPickup: readyForPickUpOrderReducer,
  orderSearch: searchOrderReducer,
  orderOnTheWay: orderOnTheWayOrderReducer,
  pendingList: pendingOrdersReducer,
  completedList: completedOrdersReducer,
  postList: postsListReducer,
  postCreate: postCreateReducer,
  postDelete: postDeleteReducer,
  vendorLogin: vendorLoginReducer,
  vendorForgot: vendorForgotReducer,
  updateVendor: updateVendorReducer,
  getRestaurants: getMyRestaurantsReducer,
  getRestaurantOrders: getRestaurantOrderReducer,
  getRestaurantMeals: getRestaurantMealsReducer,
  getRestaurantPosts: getRestaurantPostsReducer,
  createRestaurant: createRestaurantReducer,
  updateRestaurant: updateRestaurantReducer,
  getMeals: getMealsReducer,
  createMeal: createMealReducer,
  updateMeal: updateMealReducer,
  deleteMeal: deleteMealReducer,
  categoryList: FetchCategoriesReducer,
  getStates: GetStateReducer,
  getLocalGovernments: GetLocalGovernmentReducer,
  getMessages: messageReducer,
  sendMessage: SendMessageReducer,
  verifyToken: verifyTokenReducer,
  resetPassword: resetPasswordReducer,
  getPayments: GetPaymentsReducer,
  vendorRegister: vendorRegisterReducer,
  // ? coupon reducer
  getAllCoupons: GetCouponsReducer,
  createCoupon: CreateCouponReducer,
  freezeCoupon: FreezeCouponReducer,
  unfreezeCoupon: UnFreezeCouponReducer,
  deleteCoupon: DeleteCouponReducer,
  editCoupon: EditCouponReducer,
});

export default rootReducer;
