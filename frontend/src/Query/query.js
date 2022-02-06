import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import "../DBALogin/Home.css";
import { makeQuery } from "./apiCall";

const Query = () => {
  const [values, setValues] = useState({
    aadhar: "",
    error: "",
    loading: false,
    didRedirect: false,
  });

  const { aadhar, error, loading, didRedirect } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    makeQuery(aadhar).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        setValues({
          ...values,
          didRedirect: true,
        });
      }
    });
  };
  const performRedirect = () => {
    if (didRedirect) {
      return <Redirect to={`/admin/details/${aadhar}`} />;
    }
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

  const queryForm = () => {
    return (
      <div>
        <div className="btn btn-warning m-4">
          <Link to="/admin/home">Home</Link>
        </div>
        <form
          className="container col-12 text-white pt-4 rounded mt-5"
          style={{ marginLeft: "40%" }}
        >
          <h1 style={{ marginLeft: "3%" }} className="py-2">
            Search
          </h1>
          <div className="py-1">
            <input
              type="number"
              value={aadhar}
              placeholder="Aadhar No"
              onChange={handleChange("aadhar")}
              required
            />
          </div>

          <div className="rounded py-1">
            <span>
              <input
                className="row mb-3"
                style={{ marginLeft: "7%" }}
                type="submit"
                value="Submit"
                onClick={onSubmit}
              />
            </span>
          </div>
        </form>
      </div>
    );
  };

  return (
    <div>
      {loadingMessage()}
      {errorMessage()}
      {queryForm()}
      {performRedirect()}
    </div>
  );
};

export default Query;
