import {Navigate} from "react-router-dom";

export function ProtectedRoute({children}){
    if(localStorage.getItem("user")){
        return children;
    }
    else{
        return <Navigate to="/login" replace />
    }
}
export function UnProtectedRout({children}){
    if(localStorage.getItem("user")){
        return <Navigate to="/login" replace />
    }
    else{
        return children;
    }
}