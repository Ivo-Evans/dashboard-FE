import React from "react";
import PropTypes from "prop-types";
import * as sc from "../styled-components";
import styled from "styled-components";
import { PieChart } from "react-minimal-pie-chart";
import randomColour from "../../../utils/randomColour"

const WarmersCard = ({ title, warmers }) => {
   const pieData = Object.keys(warmers).map(warmer => {
        return {
            title: warmer,
            value: warmers[warmer],
            color: randomColour()
        }
    })
  return (
      <sc.Card>
        <sc.Title>{title}</sc.Title>
        <sc.Contents>
          <PieChart data={pieData} viewBoxSize={[300, 300]} />
        </sc.Contents>
      </sc.Card>
  );
};

WarmersCard.propTypes = {
  title: PropTypes.string.isRequired,
};

export default WarmersCard;
