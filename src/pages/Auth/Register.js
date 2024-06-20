import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();
  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/Register`,
        { name, email, password, address, phone, answer }
      );

      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log("error in registration");
      toast.error("something went wrong");
    }
    setName("");
    setEmail("");
    setPassword("");
    setAddress("");
    setPhone("");
    setAnswer("");
  };
  //   console.log("hello", process.env.REACT_APP_API);
  return (
    <Layout title={"Register here"}>
      <div className="container container-area">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <h1>Register here</h1>
            <form onSubmit={submitHandler}>
              <div className="mb-3">
                <label htmlFor="exampleInputName" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control wide-input"
                  id="exampleInputName"
                  onChange={(event) => setName(event.target.value)}
                  value={name}
                />
              </div>
              <div className="mb-3">
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
                {/* <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div> */}
              </div>
              <div className="mb-3">
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
                <label htmlFor="exampleInputAddress" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputAddress"
                  onChange={(event) => setAddress(event.target.value)}
                  value={address}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPhone" className="form-label">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="exampleInputPhone"
                  onChange={(event) => setPhone(event.target.value)}
                  value={phone}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputAnswer" className="form-label">
                  What is your favourite sports ?
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputAnswer"
                  onChange={(event) => setAnswer(event.target.value)}
                  value={answer}
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  I agree to the terms and conditions
                </label>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <p className="mt-3">
                Already have an account? <Link to="/login">Log in</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
