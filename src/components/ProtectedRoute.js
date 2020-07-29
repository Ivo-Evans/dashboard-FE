import React from 'react'
import { Route, Redirect } from "react-router-dom"
import { currentJWT } from "../utils/auth/currentJWT"

export const ProtectedRoute = ({path, children}) => {
    console.log(currentJWT())
    if (currentJWT()) {
        return <Route path={path}>{children}</Route>;
    }
    return <Redirect to="/login" />;
}
