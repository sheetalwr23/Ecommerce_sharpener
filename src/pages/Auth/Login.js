import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/auth";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const HandleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/login`,
        { email, password }
      );

      if (res && res.data.success) {
        toast.success(res.data && res.data.message, { duration: 5000 });
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });

        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message, { duration: 4000 });
      }
    } catch (error) {
      console.log("error in login");
      toast.error("something went wrong", { duration: 4000 });
    }

    setEmail("");
    setPassword("");
  };
  //   console.log(process.env.REACT_APP_API);
  return (
    <Layout title={"Login"}>
      <div className="row justify-content-center" style={{ marginTop: "80px" }}>
        <div
          className="col-md-4"
          style={{
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h1>Login here</h1>
          <form onSubmit={HandleSubmit}>
            <div className="mb-2">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={(event) => setPassword(event.target.value)}
                value={password}
              />
            </div>
            <div className="mb-3">
              <div className="button-container">
                <button type="submit" className="btn btn-primary">
                  LOGIN
                </button>
                <p
                  className="forgot-password-link"
                  onClick={() => {
                    navigate("/forgot-password");
                  }}
                >
                  Forgot password?
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
