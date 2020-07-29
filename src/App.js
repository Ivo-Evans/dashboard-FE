import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Login } from "./pages/Login"
import { Signup } from "./pages/Signup"

import './App.css';

function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/login">
                <Signup />
            </Route>
            <Route path="/signup">
                <Login />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
