import React from "react";
import ComponentWrapper from "../common/ComponentWrapper";
import { Link } from "react-router-dom";

const Dashboard = () => (
  <div>
    <h1>This is the home page</h1>
    <Link to="/admin">Click to view our about page</Link>
  </div>
);

export default ComponentWrapper(Dashboard);
