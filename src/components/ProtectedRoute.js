import React from 'react'
import { Route, Redirect } from "react-router-dom"
import { currentJWT } from "../utils/currentJWT"

export const ProtectedRoute = ({path, children}) => {
    console.log(currentJWT())
    if (currentJWT()) {
        return <Route path={path}>{children}</Route>;
    }
    return <Redirect to="/login" />;
}
