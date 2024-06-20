import React from "react";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";
import { useAuth } from "../../context/auth";

const AdminDashboard = () => {
  const [auth] = useAuth();

  return (
    <Layout>
      <div className="container-fluid py-4">
        <div className="row">
          <div className="col-lg-3">
            <AdminMenu />
          </div>
          <div className="col-lg-9">
            <div className="card shadow-sm">
              <div className="card-body">
                <h2 className="card-title mb-4">Admin Details</h2>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <strong>Name:</strong> {auth?.user?.name}
                  </li>
                  <li className="list-group-item">
                    <strong>Email:</strong> {auth?.user?.email}
                  </li>
                  <li className="list-group-item">
                    <strong>Phone:</strong> {auth?.user?.phone}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
