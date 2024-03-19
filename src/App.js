/** @format */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword";
import Welcome from "./pages/Welcome";
import WelcomeBack from "./pages/WelcomeBack"
import CreateAccount from "./pages/CreateAccount";
import OtpCode from "./pages/OtpCode"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div className="App">
      <FontAwesomeIcon icon="fa-regular fa-user" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />     
          <Route path="/registration" element={<Registration />} /> 
          <Route path="/resetpassword" element={<ResetPassword />} /> 
          <Route path="/forgotpassword" element={<ForgotPassword />} /> 
          <Route path="/welcome" element={<Welcome />} />
          <Route path="welcomeback" element={<WelcomeBack />} />
          <Route path="createaccount"element={<CreateAccount />} />
          <Route path="otpcode" element={<OtpCode />} />
        </Routes>
              
      </BrowserRouter>
    </div>
  );
}

export default App;
