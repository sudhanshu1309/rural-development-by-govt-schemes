import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "./Home.css";
import { signin, authenticate, isAuthenticated } from "./apiCall";

const Home = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    didRedirect: false,
  });

  const { email, password, error, loading, didRedirect } = values;

  const { user } = isAuthenticated();

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
    // console.log(values);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, password }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        authenticate(data, () => {
          setValues({
            ...values,
            didRedirect: true,
          });
        });
      }
    });
  };
  const performRedirect = () => {
    if (didRedirect) {
      if (user && user.role === "1") {
        return <Redirect to="/admin/dashboard" />;
      }
    }
    // if (isAuthenticated()) {
    //   return <Redirect to="/" />;
    // }
  };

  const loadingMessage = () => {
    return (
      loading && (
        <div className="row col-5">
          <div className="col md-6 offset-sm-3 text-center">
            <div className="alert alert-info">
              <h2>Loading...</h2>
            </div>
          </div>
        </div>
      )
    );
  };

  const errorMessage = () => {
    return (
      <div className="row col-5">
        <div className="col md-6 offset-sm-3 text-center">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };

  const signinform = () => {
    return (
      <div>
        <form className="box">
          <h1>Login</h1>
          <input
            type="email"
            value={email}
            name="AdName"
            id="username"
            placeholder="Email"
            onChange={handleChange("email")}
            required
          />
          <input
            type="password"
            value={password}
            id="pwd"
            placeholder="Password"
            onChange={handleChange("password")}
            required
          />
          <input type="submit" value="Login" onClick={onSubmit} />
        </form>
      </div>
    );
  };
  return (
    <div>
      {loadingMessage()}
      {errorMessage()}
      {signinform()}
      {performRedirect()}
    </div>
  );
};

export default Home;
