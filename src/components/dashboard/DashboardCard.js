import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Card = styled.div`
  background-color: #fff;
`;

const DashboardCard = ({ title }) => {
  return (
    <Card>
      <h2>{title}</h2>
    </Card>
  );
};

DashboardCard.propTypes = {};

export default DashboardCard;
