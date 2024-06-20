import React from "react";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
    <div className="admin-menu-container">
      <div className="list-group">
        <h4 className="admin-panel-heading">Admin Panel</h4>
        <NavLink
          to="/dashboard/admin/create-category"
          className="list-group-item list-group-item-action admin-menu-item"
          activeclassname="active"
        >
          Create Category
        </NavLink>
        <NavLink
          to="/dashboard/admin/create-product"
          className="list-group-item list-group-item-action admin-menu-item"
          activeclassname="active"
        >
          Create Product
        </NavLink>
        <NavLink
          to="/dashboard/admin/products"
          className="list-group-item list-group-item-action admin-menu-item"
          activeclassname="active"
        >
          Products
        </NavLink>
        <NavLink
          to="/dashboard/admin/orders"
          className="list-group-item list-group-item-action admin-menu-item"
          activeclassname="active"
        >
          Orders
        </NavLink>
        <NavLink
          to="/dashboard/admin/users"
          className="list-group-item list-group-item-action admin-menu-item"
          activeclassname="active"
        >
          Users
        </NavLink>
      </div>
    </div>
  );
};

export default AdminMenu;
