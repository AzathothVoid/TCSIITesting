import { useLocation, Navigate, Outlet } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectCurrentToken } from "./authSlice"

const PrivateRoutes = () => {
    const token = useSelector(selectCurrentToken)
    
    const location = useLocation()
    return (
        token
            ? <Outlet />
            : <Navigate to="/account/login" state={{ from: location }} replace />
    )
}
export default PrivateRoutes