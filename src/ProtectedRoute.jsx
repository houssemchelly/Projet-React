import { Navigate, Outlet, useLocation } from "react-router-dom";
const ProtectedRoute = () => {
 const location = useLocation();
 return localStorage?.getItem("user") ? (
 <Outlet />
 ) : (
 <Navigate to={"/login"} replace state={{ path: location.pathname }} />
 );
};
export default ProtectedRoute;