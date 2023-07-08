import { UserAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";



export default function UntiProtectedRoute({children}) {
    const {user} = UserAuth()


    if(user) {
        return <Navigate to='/profile' />
    }
    return children
}
