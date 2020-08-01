import React from "react";
import PropTypes from "prop-types";
import * as sc from "../styled-components";
import { PieChart } from "react-minimal-pie-chart";
import randomColour from "../../../utils/randomColour"
import styled from "styled-components"


const Chart = styled(PieChart)`
max-height: 270px;
`

const WarmersCard = ({ title, warmers }) => {
   const pieData = Object.keys(warmers).map(warmer => {
        return {
            title: warmer,
            key: warmer,
            value: warmers[warmer],
            color: randomColour()
        }
    })
  return (
      <sc.Card>
        <sc.Title>{title}</sc.Title>
        <sc.Contents>
          <Chart 
          data={pieData} 
          radius={10}
          viewBoxSize={[50, 50]}
          center={[25, 15]}
          background={"none"}
          labelStyle={(index) => ({
            fontSize: '2.5px',
          })}
          label={(e) => {
              console.log(pieData[e.dataIndex].title)
              return pieData[e.dataIndex].title
          }}
          labelPosition={112}
          />
        </sc.Contents>
      </sc.Card>
  );
};

WarmersCard.propTypes = {
  title: PropTypes.string.isRequired,
};

export default WarmersCard;
