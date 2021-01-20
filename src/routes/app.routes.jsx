import { Switch, Route } from "react-router-dom";

//Pages
import ListCustomers from "../pages/ListCustomers";
import RegisterCustomers from "../pages/RegisterCustomers";

const AppRoutes = () => (
  <Switch>
    <Route path="/" exact component={ListCustomers} />
    <Route path="/clientes/cadastro" component={RegisterCustomers} />
  </Switch>
);
export default AppRoutes;
