import React from "react";
import fetchJSON from "../utils/fetchJSON";
import * as origins from "../variables/origins";

function useWeather(setWeather, loggedIn) {
  React.useEffect(() => {
    if (!loggedIn && "geolocation" in navigator) {
      return;
    }
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      const subdirectory = "/data/2.5/weather";
      const queryString = `?lat=${latitude}&lon=${longitude}&appid=d0a10211ea3d36b0a6423a104782130e&mode=json.js:16&units=metric`;
      fetchJSON({
        url: origins.proxy + origins.weather + subdirectory + queryString,
      }).then(setWeather);
    });
  }, [setWeather, loggedIn]);
}

export default useWeather;
