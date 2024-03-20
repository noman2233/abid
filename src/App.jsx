import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import AdminPortal from "./pages/AdminPortal";
import CustomerLogin from "./pages/CustomerLogin";
import Login from "./pages/authentication/login/Login";
import Signup from "./pages/authentication/signup/Signup";
import ForgotPassword from "./pages/authentication/forgotPassword/ForgotPassword";
import NewPassword from "./pages/authentication/newPassword/NewPassword";
import OTP from "./pages/authentication/otp/OTP";
import Success from "./pages/authentication/success/Success";
import Home from "./pages/home/Home";
 

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/success" element={<Success />} />
        <Route path="/admin" element={<AdminPortal />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
