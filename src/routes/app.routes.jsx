import { Switch, Route } from "react-router-dom";

//Pages
import ListCustomers from "../pages/ListCustomers";

const AppRoutes = () => (
  <Switch>
    <Route path="/listcustomers" exact component={ListCustomers} />
  </Switch>
);
export default AppRoutes;
