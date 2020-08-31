import React from "react";

import { OverviewStyled } from "./OverviewStyled";
import CardOverview from "../CardOverview/CardOverview";

import facebook from "../../images/icon-facebook.svg";

const Overview = (props) => {
  return (
    <OverviewStyled>
      {props.children}
    </OverviewStyled>
  );
};

export default Overview;
