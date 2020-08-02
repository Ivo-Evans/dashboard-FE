import React from "react";
import PropTypes from "prop-types";
import * as sc from "../styled-components";

const NewsCard = ({ title, news }) => {    
  return (
    <sc.CardLink to="/news">
      <sc.Card>
        <sc.Title>{title}</sc.Title>
        <sc.Contents>
        {news?.title && <h4>{news.title}</h4>}
        {news?.title && <p>{news.description[0]}</p>}
        </sc.Contents>
      </sc.Card>
    </sc.CardLink>
  );
};

NewsCard.propTypes = {
  title: PropTypes.string.isRequired,
};

export default NewsCard;
