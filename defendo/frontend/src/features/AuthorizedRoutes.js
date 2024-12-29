import { useLocation, Navigate, Outlet } from "react-router-dom"
import Cookies from "js-cookie"

const AuthorisedRoutes = () => {
    const token =  Cookies.get("loginToken")
    const role = Cookies.get("userRole");
    console.log(token, role);
   
    const location = useLocation()

    if (!token) {
        return <Navigate to="/account/login" state={{ from: location }} replace />;
    }
    
    if (role === 'admin') {
        return <Outlet />;
    } else {
        return <Navigate to="/" replace />;
    }

}
export default AuthorisedRoutes;

