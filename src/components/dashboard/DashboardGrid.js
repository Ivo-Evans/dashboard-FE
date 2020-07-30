import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { narrowPage, mediumPage } from "../../variables/styles";

const Dashboard = styled.main`
  max-width: 90%;
  margin: 0 auto;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: ${mediumPage}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${narrowPage}) {
    grid-template-columns: 1fr;
  }
`;

const DashboardGrid = ({children}) => {
  return <Dashboard>
      {children}
  </Dashboard>;
};

DashboardGrid.propTypes = {
    children: PropTypes.arrayOf(PropTypes.func)
};

export default DashboardGrid;
