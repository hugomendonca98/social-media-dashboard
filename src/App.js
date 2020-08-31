import React, { useState } from "react";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyles/GlobalStyle";
import { theme, themeDark } from "./GlobalStyles/ThemeStyle";
import Menu from "./Components/Menu/Menu";
import Fallowers from "./Components/Fallowers/Fallowers";
import { SubTitle } from "./Components/Overview/OverviewStyled";
import Overview from "./Components/Overview/Overview";
import CardOverview from "./Components/CardOverview/CardOverview";
import { limeGreen, brightRed } from "./GlobalStyles/Colors";

import facebook from "./images/icon-facebook.svg";
import instagram from "./images/icon-instagram.svg";
import twitter from "./images/icon-twitter.svg";
import youtube from "./images/icon-youtube.svg";

function App() {
  //const themeContext = useContext(ThemeContext);
  const [toggleTheme, setToggleTheme] = useState(false);

  const changeTheme = () => {
    toggleTheme ? setToggleTheme(false) : setToggleTheme(true);
  };

  return (
    <>
      <ThemeProvider theme={!toggleTheme ? theme : themeDark}>
        <GlobalStyle />
        <div className="App">
          <Menu toggleThemeFunction={changeTheme} />
          <Fallowers />
          <SubTitle>Overview - Today</SubTitle>
          <Overview>
            <CardOverview
              icon={facebook}
              title="Page Views"
              iconAlt="Page Views"
              cardValue="87"
              progress="+3%"
              colorProgress={limeGreen}
            />
            <CardOverview
              icon={facebook}
              title="Likes"
              iconAlt="Likes"
              cardValue="52"
              progress="-2%"
              colorProgress={brightRed}
            />
            <CardOverview
              icon={instagram}
              title="Likes"
              iconAlt="Likes"
              cardValue="5462"
              progress="+2257%"
              colorProgress={limeGreen}
            />
            <CardOverview
              icon={instagram}
              title="Profile Views"
              iconAlt="Profile Views"
              cardValue="52k"
              progress="+1375%"
              colorProgress={limeGreen}
            />
            <CardOverview
              icon={twitter}
              title="Retweets"
              iconAlt="Retweets"
              cardValue="117"
              progress="+303%"
              colorProgress={limeGreen}
            />
            <CardOverview
              icon={twitter}
              title="Likes"
              iconAlt="Likes"
              cardValue="507"
              progress="+553%"
              colorProgress={limeGreen}
            />
            <CardOverview
              icon={youtube}
              title="Likes"
              iconAlt="Likes"
              cardValue="107"
              progress="-19%"
              colorProgress={brightRed}
            />
            <CardOverview
              icon={youtube}
              title="Total Views"
              iconAlt="Total Views"
              cardValue="1407"
              progress="-12%"
              colorProgress={brightRed}
            />
          </Overview>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
