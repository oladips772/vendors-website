/** @format */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./ForgotPassword";
import ErrorCode from "./ErrorCode";
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
          <Route path="/errorcode" element={<ErrorCode />} />
        </Routes>
              
      </BrowserRouter>
    </div>
  );
}

export default App;
