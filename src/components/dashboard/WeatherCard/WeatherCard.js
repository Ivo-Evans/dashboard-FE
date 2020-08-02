import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import * as sc from "../styled-components"
import * as origins from "../../../variables/origins";

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
  return (
    <sc.Card>
      <sc.Title>{title}</sc.Title>
      <sc.Contents>
      {weather.name && (
        <WeatherTopRow>
          <img
            src={`${origins.weatherIcons}/img/wn/${weather?.weather[0]?.icon}@2x.png`}
            alt={weather?.weather[0]?.icon}
          />
          <WeatherTemperature>{weather?.main?.temp}°</WeatherTemperature>
        </WeatherTopRow>
      )}
      {weather && <WeatherLocation>{weather?.name}</WeatherLocation>}
      </sc.Contents>
    </sc.Card>
  );
};

WeatherCard.propTypes = {
    title: PropTypes.string.isRequired,
    weather: PropTypes.object.isRequired
};


export default WeatherCard;
