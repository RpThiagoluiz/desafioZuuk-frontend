import { BrowserRouter } from "react-router-dom";
//Routes
import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";
//AuthHook
import { useAuth } from "../hooks/auth";

const Routes = () => {
  const { logged } = useAuth();
  return (
    <BrowserRouter>{logged ? <AppRoutes /> : <AuthRoutes />}</BrowserRouter>
  );
};
export default Routes;
