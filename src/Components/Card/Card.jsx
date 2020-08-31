import React from "react";

import { CardStyled } from "./CardStyled";

const Card = ({ id, fallowers, today, icon, iconName, color }) => {
  return (
    <CardStyled className="card" style={{borderTop: `solid 4px ${color}`}}>
      <div>
        <img src={icon} alt={iconName} />
        <span>{id}</span>
      </div>
      <span>{fallowers}</span>
      <p className="fallowers">Fallowers</p>
      <p className="today">{today} today</p>
    </CardStyled>
  );
};

export default Card;
