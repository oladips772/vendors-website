/** @format */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./ForgotPassword";
import Welcome from "./pages/Welcome";
import ErrorCode from "./ErrorCode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div className="App">
      <FontAwesomeIcon icon="fa-regular fa-user" />
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
