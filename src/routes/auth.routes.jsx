import { Switch, Route } from "react-router-dom";

import SingIn from "../pages/SingIn";

const AuthRoutes = () => (
  <Switch>
    <Route path="/" component={SingIn} />
  </Switch>
);
export default AuthRoutes;
