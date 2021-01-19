import { Switch, Route } from "react-router-dom";

import SingIn from "../pages/SingIn";

const AuthRoutes = () => (
  <Switch>
    <Route component={SingIn} />
  </Switch>
);
export default AuthRoutes;
