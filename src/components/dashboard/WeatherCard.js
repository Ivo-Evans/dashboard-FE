import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import farenheightToCelsius from "../../utils/farenheightToCelsisus";
import * as origins from "../../variables/origins";

const Card = styled.div`
  background-color: #fff;
`;

const WeatherTopRow = styled.div`
display: flex;
justify-content: space-around;
`

const WeatherTemperature = styled.p`
display: inline-block;
font-size: 2em;
`

const WeatherLocation = styled.h3`
font-size: 2em;
margin: 0 0 1em 0;
`

const WeatherCard = ({ title, weather }) => {
  const temp = farenheightToCelsius(weather?.main?.temp);
  return (
    <Card>
      <h2>{title}</h2>
      {weather && (
        <WeatherTopRow>
          <img
            src={`${origins.weatherIcons}/img/wn/${weather.weather[0].icon}@2x.png`}
          />
          <WeatherTemperature>{temp}°</WeatherTemperature>
        </WeatherTopRow>
      )}
      {weather && <WeatherLocation>{weather.name}</WeatherLocation>}
    </Card>
  );
};

WeatherCard.propTypes = {};

export default WeatherCard;
