import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";



export default function ProtectedRoute({children}) {
    const {user} = UserAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if(!user) {
            return navigate('/signin')
        }

    }, [user])
    return children 
}