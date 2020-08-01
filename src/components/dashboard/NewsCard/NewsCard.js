import React from "react";
import PropTypes from "prop-types";
import * as sc from "../styled-components";
import styled from "styled-components";

const NewsCard = ({ title }) => {
  return (
    <sc.CardLink to="/news">
      <sc.Card>
        <sc.Title>{title}</sc.Title>
        <sc.Contents></sc.Contents>
      </sc.Card>
    </sc.CardLink>
  );
};

NewsCard.propTypes = {
  title: PropTypes.string.isRequired,
};

export default NewsCard;
