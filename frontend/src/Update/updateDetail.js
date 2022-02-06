import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";

const UpdateDetails = () => {
  const [values, setValues] = useState({
    aadhar: "",
  });
  const { aadhar } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <div>
      <div className="btn btn-warning m-4">
        <Link to="/admin/home">Home</Link>
      </div>
      <div className="box">
        <input
          className="rounded p-2"
          type="text"
          placeholder="Aadhar No"
          value={aadhar}
          onChange={handleChange("aadhar")}
        />
        <Link to={`/admin/update/${aadhar}`}>
          <input type="submit" className="btn-success rounded" />
        </Link>
      </div>
    </div>
  );
};

export default UpdateDetails;
