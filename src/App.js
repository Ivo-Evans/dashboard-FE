import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Photos } from "./pages/Photos";
import { Todos } from "./pages/Todos";
import { Sport } from "./pages/Sport";
import { News } from "./pages/News"
import { ProtectedRoute } from "./components/ProtectedRoute";

import useWeather from "./hooks/useWeather";
import useNews from "./hooks/useNews"
import useTeamNames from "./hooks/useTeamNames"
import useTeamVictories from "./hooks/useTeamVictories"
import usePhotos from "./hooks/usePhotos";
import useTodos from "./hooks/useTodos";
import useWarmers from "./hooks/useWarmers";

import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);

  const [weather, setWeather] = React.useState({});
  useWeather(setWeather, loggedIn)

  const [news, setNews] = React.useState({})
  useNews(setNews, loggedIn)
    
  const [currentTeam, setCurrentTeam] = React.useState("")

  const [teamNames, setTeamNames] = React.useState([])
  useTeamNames(setTeamNames, setCurrentTeam, loggedIn)

  const [teamVictories, setTeamVictories] = React.useState([])
  useTeamVictories(setTeamVictories, currentTeam, loggedIn)

  const [photos, setPhotos] = React.useState([]);
  usePhotos(setPhotos, loggedIn);

  const [todos, setTodos] = React.useState([]);
  useTodos(setTodos, loggedIn);

  const [warmers, setWarmers] = React.useState({});
  useWarmers(setWarmers, loggedIn);

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

            <ProtectedRoute path="/news" setLoggedIn={setLoggedIn}>
                <News news={news} />
            </ProtectedRoute>

          <ProtectedRoute path="/sports" setLoggedIn={setLoggedIn}>
            <Sport 
            teamNames={teamNames}
            currentTeam={currentTeam}
            setCurrentTeam={setCurrentTeam} 
            teamVictories={teamVictories}
            />
          </ProtectedRoute>  

          <ProtectedRoute path="/photos" setLoggedIn={setLoggedIn}>
            <Photos photos={photos} setPhotos={setPhotos} />
          </ProtectedRoute>

          <ProtectedRoute path="/todos" setLoggedIn={setLoggedIn}>
            <Todos todos={todos} setTodos={setTodos} />
          </ProtectedRoute>

          <ProtectedRoute path="/" setLoggedIn={setLoggedIn}>
            <Home
              weather={weather}
              news={news}
              currentTeam={currentTeam}
              teamVictories={teamVictories}
              photos={photos}
              todos={todos}
              warmers={warmers}
            />
          </ProtectedRoute>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
