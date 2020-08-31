import React from "react";
import {
  DivFlexBetween,
  LogoTitle,
  Description,
  SwitchTheme,
  CheckboxDiv,
} from "./MenuStyled";

const Menu = ({ toggleThemeFunction }) => {

  return (
    <DivFlexBetween>
      <div>
        <LogoTitle>Social Media Dashboard</LogoTitle>
        <Description>Total Followers: 23,004</Description>
      </div>
      <CheckboxDiv>
        <span>Dark Mode</span>
        <SwitchTheme className="switch">
          <input type="checkbox" onChange={toggleThemeFunction}/>
          <span className="slider round"></span>
        </SwitchTheme>
      </CheckboxDiv>
    </DivFlexBetween>
  );
};

export default Menu;
