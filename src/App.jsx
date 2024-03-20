import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import AdminPortal from "./pages/AdminPortal";
import CustomerLogin from "./pages/CustomerLogin";
import Login from "./pages/login/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminPortal />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
