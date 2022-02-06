import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { makeQuery } from "./apiCall";

const QueryResult = ({ match }) => {
  const [values, setValues] = useState({
    result: [],
    errors: "",
  });

  const { result, errors } = values;

  const preload = (aadhar) => {
    makeQuery(aadhar).then((data) => {
      if (data.error) {
        setValues({ ...values, errors: data.error });
      } else {
        setValues({ ...values, result: data });
      }
    });
  };

  useEffect(() => {
    preload(match.params.aadhar);
  }, []);
  //
  return (
    <div className="container text-white fs-4" style={{ marginLeft: "40%" }}>
      <h1 className="mt-5">Query Result</h1>
      <div className="row">
        <span>
          <label>Aadhar No: &nbsp;</label>
          <label>{result.aadhar}</label>
        </span>
      </div>
      <div className="row">
        <span>
          <label>Name: &nbsp;</label>
          <label>{result.name}</label>
        </span>
      </div>

      <div className="row">
        <span>
          <label>DOB: &nbsp;</label>
          <label>{result.dob}</label>
        </span>
      </div>

      <div className="row">
        <span>
          <label>Gender: &nbsp;</label>
          <label>{result.gender}</label>
        </span>
      </div>

      <div className="row">
        <span>
          <label>Spouse Name: &nbsp;</label>
          <label>{result.spouse_name}</label>
        </span>
      </div>

      <div className="row">
        <span>
          <label>No of Children: &nbsp;</label>
          <label>{result.no_of_children}</label>
        </span>
      </div>

      <div className="row">
        <span>
          <label>Annual Income: &nbsp;</label>
          <label>{result.annual_income}</label>
        </span>
      </div>

      <div className="row">
        <span>
          <label>Mob No: &nbsp;</label>
          <label>{result.mob_no}</label>
        </span>
      </div>

      <div className="row">
        <span>
          <label>Email: &nbsp;</label>
          <label>{result.email}</label>
        </span>
      </div>

      <div className="row">
        <span>
          <label>Address: &nbsp;</label>
          <label>{result.address}</label>
        </span>
      </div>

      <div className="row">
        <span>
          <label>Schemas Enrolled: &nbsp;</label>
          <label>{result.schemes_enrolled}</label>
        </span>
      </div>
    </div>
  );
};

export default QueryResult;
