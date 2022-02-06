import { Link } from "react-router-dom";
import { isAuthenticated } from "../DBALogin/apiCall";

const Routing = () => {
  const { user } = isAuthenticated();
  const routeForm = () => {
    return (
      <div>
        <div className="box">
          <h1 className="mb-5 fs-4">Welcome {user.name}</h1>
          <div className="row btn btn-warning mx-2">
            <Link to="/admin/register">Register</Link>
          </div>
          <div className=" btn btn-warning mx-2">
            <Link to="/admin/details">Search</Link>
          </div>
          <div className=" btn btn-warning mx-2">
            <Link to="/admin/update">Update</Link>
          </div>
        </div>
      </div>
    );
  };

  //
  return <div>{routeForm()}</div>;
};

export default Routing;
