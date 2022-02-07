import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Submit from "./Submit/Submit";
import Home from "./DBALogin/Home";
import Query from "./Query/query";
import QueryResult from "./Query/queryResult";
import Routing from "./Routing/Routing";
import Update from "./Update/update";
import UpdateDetails from "./Update/updateDetail";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/admin/register" component={Submit} />
        <Route exact path="/admin/details" component={Query} />
        <Route exact path="/admin/details/:aadhar" component={QueryResult} />
        <Route exact path="/admin/home" component={Routing} />
        <Route exact path="/admin/update/:id" component={Update} />
        <Route exact path="/admin/update" component={UpdateDetails} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
