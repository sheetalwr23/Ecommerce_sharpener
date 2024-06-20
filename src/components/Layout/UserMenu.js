import React from "react";
import { NavLink } from "react-router-dom";

const UserMenu = () => {
  return (
    <div className="user-menu-container h-100">
      <div className="list-group">
        <h4 className="user-panel-heading">Dashboard</h4>
        <div className="border-bottom  ">
          <NavLink
            to="/dashboard/user/profile"
            className="list-group-item list-group-item-action user-menu-item"
            activeclassname="active"
          >
            Profile
          </NavLink>
        </div>
        <div className="border-bottom">
          <NavLink
            to="/dashboard/user/orders"
            className="list-group-item list-group-item-action user-menu-item"
            activeclassname="active"
          >
            Orders
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
