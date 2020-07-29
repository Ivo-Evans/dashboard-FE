import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Login } from "./pages/Login"
import { Signup } from "./pages/Signup"
import { ProtectedRoute } from "./components/ProtectedRoute"

import './App.css';

function App() {
  return (
      <div className="App">
    <BrowserRouter>
        <Switch>                
            <Route path="/signup">
                <Signup />
            </Route>

            <Route path="/login">
                <Login />
            </Route>
            
            <ProtectedRoute path="/">
                <Home />
            </ProtectedRoute>
        
        </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
