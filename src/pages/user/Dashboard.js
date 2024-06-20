import React from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";

const Dashboard = () => {
  const [auth] = useAuth();

  return (
    <Layout title="User Dashboard">
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="card shadow-sm">
              <div className="card-header bg-primary text-white">
                <h5 className="card-title mb-0">User Information</h5>
              </div>
              <div className="card-body">
                <div className="row mb-3">
                  <div className="col">
                    <h6 className="fw-bold">Name:</h6>
                    <p>{auth?.user?.name}</p>
                  </div>
                  <div className="col">
                    <h6 className="fw-bold">Email:</h6>
                    <p>{auth?.user?.email}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <h6 className="fw-bold">Address:</h6>
                    <p>{auth?.user?.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
