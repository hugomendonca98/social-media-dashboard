import styled from "styled-components";

import { darkGrayishBlueText, limeGreen } from "../../GlobalStyles/Colors";

export const CardStyled = styled.div`
  padding: 30px;
  margin: 0px 10px 0px 10px;
  background-color: ${(props) => props.theme.cardBg};
  transition: 200ms;
  border-radius: 3px;
  margin-bottom: 20px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      color: ${darkGrayishBlueText};
      font-size: 14px;
      font-weight: 700;
      margin-left: 10px;
    }
  }
  span {
    font-size: 45px;
    font-weight: 700;
    color: ${(props) => props.theme.primaryText};
    transition: 200ms;
  }
  p.fallowers {
    letter-spacing: 4px;
    color: ${darkGrayishBlueText};
  }

  p.today {
    color: ${limeGreen};
    font-size: 14px;
    font-weight: 700;
    margin-top: 10px;
  }
`;
