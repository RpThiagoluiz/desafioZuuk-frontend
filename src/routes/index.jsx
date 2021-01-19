import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

const Routes = () => (
  <BrowserRouter>
    <AuthRoutes />
  </BrowserRouter>
);
export default Routes;
