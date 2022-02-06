import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Submit from "./Submit/Submit";
import Home from "./DBALogin/Home";
import Query from "./Query/query";
import QueryResult from "./Query/queryResult";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/admin/dashboard" component={Submit} />
        <Route exact path="/admin/details" component={Query} />
        <Route exact path="/admin/details/:aadhar" component={QueryResult} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
