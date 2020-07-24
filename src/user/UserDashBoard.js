import React from "react";
import { isAuthenticated } from "../auth/helper";
import Base from "../core/Base";

const UserDashboard = () => {
  return (
    <Base title="UserDashboard Page">
      <h1> This is User page!! </h1> <br />
      <h3>{isAuthenticated().user.name} is Logging here :D</h3>
    </Base>
  );
};

export default UserDashboard;
