import React from "react";

import { CardOverviewStyled } from "./CardOverviewStyled";

const CardOverview = ({ title, icon, iconAlt, cardValue, progress, colorProgress }) => {
  return (
    <CardOverviewStyled>
      <div className="title-icon">
        <p>{title}</p>
        <img src={icon} alt={iconAlt} />
      </div>
      <div className="value-card">
        <p className="card-value">{cardValue}</p>
        <p className="progress" style={{color: `${colorProgress}`}}>{progress}</p>
      </div>
    </CardOverviewStyled>
  );
};

export default CardOverview;
