import React from "react";
import PropTypes from "prop-types";
import * as sc from "../styled-components";
import styled from "styled-components";

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  min-height: 100%;
  max-height: 100%;
  margin: 0 auto;
`;

const Photo = styled.img`
  width: auto;
  height: 4em;
  margin: 0.25em;
`;

const PhotoCard = ({ title, photos }) => {
  const displayPhotos = photos.slice(0, 4).map(photo => <Photo key={photo.id} src={photo.url}/>)
  return (
      <sc.CardLink to="/photos">
    <sc.Card>
      <sc.Title>{title}</sc.Title>
      <sc.Contents> 
          <PhotoGrid>
          {displayPhotos}
          </PhotoGrid>
      </sc.Contents>
    </sc.Card>
    </sc.CardLink>
  );
};

PhotoCard.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PhotoCard;
