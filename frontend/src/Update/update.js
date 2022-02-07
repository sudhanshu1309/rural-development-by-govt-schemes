import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../DBALogin/apiCall";
import { Link } from "react-router-dom";
import { updatePeople } from "./apiCall";
import { getAllSchema } from "../Submit/apiCall";

const Update = ({ match }) => {
  const [values, setValues] = useState({
    aadhar: match.params.id,
    name: "",
    dob: "",
    gender: "",
    spouseName: "",
    noOfChildren: "",
    annualIncome: "",
    mobNo: "",
    email: "",
    address: "",
    schemasEnrolled: [],
    error: "",
    schemas: [],
    loading: false,
  });

  const {
    aadhar,
    name,
    dob,
    gender,
    spouseName,
    noOfChildren,
    annualIncome,
    mobNo,
    email,
    address,
    schemasEnrolled,
    error,
    schemas,
    loading,
  } = values;


  // console.log(aadhar);

  const preload = () => {
    getAllSchema().then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({ ...values, schemas: data });
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  const handleChange = (name) => (event) => {
    setValues({
      ...values,
      error: false,
      loading: false,
      [name]: event.target.value,
    });
  };

  console.log(match.params.id);

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: "", loading: true });
    updatePeople(match.params.id, values)
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error });
        } else {
          setValues({
            ...values,
            name: "",
            dob: "",
            gender: "",
            spouseName: "",
            noOfChildren: "",
            annualIncome: "",
            mobNo: "",
            email: "",
            address: "",
            schemasEnrolled: "",
            message: "",
            success: true,
            error: "",
            schemas: [],
            loading: true,
          });
        }
      })
      .catch();
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

  const submitForm = () => {
    return (
      <div>
        <div className="btn btn-warning m-4">
          <Link to="/admin/home">Home</Link>
        </div>
        <form
          className="container col-12 text-white rounded"
          style={{ marginLeft: "40%" }}
        >
          <h1 className="py-2">Update</h1>
          {/* input values */}
          <div className="py-1 text-info">
            <span>Aadhar No:&nbsp;</span>
            <span>{match.params.id}</span>
          </div>
          <div className="py-1">
            <input
              type="text"
              value={name}
              placeholder="Name"
              onChange={handleChange("name")}
              required
            />
          </div>
          <div className="py-1">
            <span>DOB:&nbsp;&nbsp;</span>
            <input
              type="date"
              value={dob}
              placeholder=""
              onChange={handleChange("dob")}
              required
            />
          </div>
          <div className="py-1">
            <input
              type="text"
              value={gender}
              placeholder="Gender"
              onChange={handleChange("gender")}
              required
            />
          </div>
          <div className="py-1">
            <input
              type="text"
              value={spouseName}
              placeholder="Spouse Name"
              onChange={handleChange("spouseName")}
              required
            />
          </div>
          <div className="py-1">
            <input
              type="text"
              value={noOfChildren}
              placeholder="No of Children"
              onChange={handleChange("noOfChildren")}
              required
            />
          </div>
          <div className="py-1">
            <input
              type="text"
              value={annualIncome}
              placeholder="Annual Income"
              onChange={handleChange("annualIncome")}
              required
            />
          </div>
          <div className="py-1">
            <input
              type="text"
              value={mobNo}
              placeholder="Mob No"
              onChange={handleChange("mobNo")}
              required
            />
          </div>
          <div className="py-1">
            <input
              type="email"
              value={email}
              placeholder="Email"
              onChange={handleChange("email")}
              required
            />
          </div>
          <div className="py-1">
            <input
              type="text"
              value={address}
              placeholder="Address"
              onChange={handleChange("address")}
              required
            />
          </div>
          <div className="py-1">
            <input
              type="text"
              value={schemasEnrolled}
              placeholder="Schemas Enrolled(Id only)"
              onChange={handleChange("schemasEnrolled")}
              required
            />
          </div>
          {schemas.map((scheme, index) => {
            return (
              <div key={index} className="text-white pt-1">
                <input
                  type="checkbox"
                  value={scheme.id}
                  onChange={handleChange("schemasEnrolled")}
                />
                <label>&nbsp;{scheme.id}</label>
                <label> &nbsp;{scheme.name}</label>
              </div>
            );
          })}
          <br />
          <div className="rounded py-1">
            <span>
              <input
                className="row mb-3 btn-success rounded"
                style={{ marginLeft: "7%" }}
                type="submit"
                value="Update"
                onClick={onSubmit}
              />
            </span>
          </div>
        </form>
      </div>
    );
  };

  //return here
  return (
    <div>
      {errorMessage()}
      {loadingMessage()}
      {submitForm()}
    </div>
  );
};

export default Update;
