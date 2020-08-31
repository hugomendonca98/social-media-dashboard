import React from "react";

import { FallowersDiv } from "./FallowersStyled";
import Card from "../Card/Card";
import Overview from "../Overview/Overview";
import {
  facebook,
  twitter,
  instagram,
  youtube,
} from "../../GlobalStyles/Colors";
import facebookImg from "../../images/icon-facebook.svg";
import twitterImg from "../../images/icon-twitter.svg";
import instagramImg from "../../images/icon-instagram.svg";
import youtubeImg from "../../images/icon-youtube.svg";

const Fallowers = () => {
  return (
    <>
      <FallowersDiv>
        <Card
          color={facebook}
          icon={facebookImg}
          id="@Hugo_mendonca"
          iconName="Facebook-icon"
          today="12"
          fallowers="1987"
        />
        <Card
          color={twitter}
          icon={twitterImg}
          id="@Hugo_mendonca"
          iconName="Twitter-icon"
          today="99"
          fallowers="1044"
        />
        <Card
          color={instagram}
          icon={instagramImg}
          id="@Hugo_mendonca"
          iconName="Instagram-icon"
          today="1099"
          fallowers="11k"
        />
        <Card
          color={youtube}
          icon={youtubeImg}
          id="@Hugo_mendonca"
          iconName="Youtube-icon"
          today="1099"
          fallowers="11k"
        />
      </FallowersDiv>
      <Overview></Overview>
    </>
  );
};

export default Fallowers;
