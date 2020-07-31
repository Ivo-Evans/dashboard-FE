import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Login } from "./pages/Login"
import { Signup } from "./pages/Signup"
import { Photos } from "./pages/Photos"
import { ProtectedRoute } from "./components/ProtectedRoute"

import useWeather from "./hooks/useWeather"
import usePhotos from "./hooks/usePhotos"

import './App.css';

function App() {
    const [weather, setWeather] = React.useState({})
    // useWeather(setWeather)

    const [photos, setPhotos] = React.useState([])
    usePhotos(setPhotos)

    // const [clothes, setClothes] = React.useState(null)
    // useClothes(setClothes)

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
            
            <ProtectedRoute path="/photos">
                <Photos photos={photos} setPhotos={setPhotos} />
            </ProtectedRoute>

            <ProtectedRoute path="/">
                <Home 
                weather={weather}
                photos={photos}
                />
            </ProtectedRoute>

        </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
