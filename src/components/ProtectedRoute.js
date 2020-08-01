import React from 'react'
import { Route, Redirect } from "react-router-dom"
import { currentJWT } from "../utils/currentJWT"

export const ProtectedRoute = ({path, setLoggedIn, children}) => {
    if (currentJWT()) {
        setLoggedIn(true)
        return <Route path={path}>{children}</Route>;
    }
    setLoggedIn(false)
    return <Redirect to="/login" />;
}
