import React from "react";
import PropTypes from "prop-types";
import * as sc from "../styled-components";

const SportsCard = ({ title, currentTeam, teamVictories }) => {
    let teamVictory
    if (teamVictories[0] && currentTeam) {
        if (teamVictories[0]?.away_team === currentTeam) {
            teamVictory = `${currentTeam} recently beat ${teamVictories[0].home_team} in an away game.`
        } else {
            teamVictory = `${currentTeam} recently beat ${teamVictories[0].away_team} on their home ground.`  
        }
    }
    
  return (
    <sc.CardLink to="/sports">
      <sc.Card>
        <sc.Title>{title}</sc.Title>
        <sc.Contents>
            <h2>{currentTeam}</h2>
            <p>{teamVictory}</p>
        </sc.Contents>
      </sc.Card>
    </sc.CardLink>
  );
};

SportsCard.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SportsCard;
