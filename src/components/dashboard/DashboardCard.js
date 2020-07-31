import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import * as sc from "./styled-components"

const Card = styled.div`
  background-color: #fff;
`;

const DashboardCard = ({ title }) => {
  return (
    <Card>
      <sc.Title>{title}</sc.Title>
    </Card>
  );
};

DashboardCard.propTypes = {};

export default DashboardCard;
