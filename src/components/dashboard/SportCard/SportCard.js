import React from "react";
import PropTypes from "prop-types";
import * as sc from "../styled-components";
import styled from "styled-components";

const SportsCard = ({ title, currentTeam }) => {
  return (
    <sc.CardLink to="/sports">
      <sc.Card>
        <sc.Title>{title}</sc.Title>
        <sc.Contents>
            {currentTeam && <h2>{currentTeam}</h2>}
        </sc.Contents>
      </sc.Card>
    </sc.CardLink>
  );
};

SportsCard.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SportsCard;
