import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  const HandleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/forgot-password`,
        { email, answer, newPassword }
      );

      if (res && res.data.success) {
        toast.success("password changes successfully", { duration: 4000 });
        navigate("/login");
      } else {
        toast.error(res.data.message, { duration: 4000 });
      }
    } catch (error) {
      console.log("error in login");
      toast.error("something went wrong", { duration: 4000 });
    }

    setEmail("");
    setNewPassword("");
  };
  return (
    <>
      <Layout title={"Forgot Password"}>
        <div
          className="row justify-content-center"
          style={{ marginTop: "80px" }}
        >
          <div
            className="col-md-4"
            style={{
              border: "1px solid #ccc",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <h1>Reset Password</h1>
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
                <label htmlFor="exampleInputEmail1" className="form-label">
                  What is your favourite sports ?
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputAnswer"
                  aria-describedby="answerHelp"
                  onChange={(event) => setAnswer(event.target.value)}
                  value={answer}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  New Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  onChange={(event) => setNewPassword(event.target.value)}
                  value={newPassword}
                />
              </div>
              <div className="mb-3">
                <div className="button-container">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ForgotPassword;
