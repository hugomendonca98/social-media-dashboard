import styled from "styled-components";

import { fontFamily, limeGreen } from "../../GlobalStyles/Colors";

export const CardOverviewStyled = styled.div`
  background-color: ${(props) => props.theme.cardBg};
  transition: 200ms;
  padding: 20px;
  width: 200px;
  margin-right: 20px;
  margin-top: 20px;
  font-family: ${fontFamily};
  border-radius: 3px;
  .title-icon {
    display: flex;
    justify-content: space-between;
    color: ${(props) => props.theme.secundaryText};
    transition: 200ms;
    font-size: 14px;
    font-weight: 700;
  }
  .value-card {
    display: flex;
    justify-content: space-between;
    width: 200px;
    align-items: center;
    margin-top: 20px;
    .card-value {
      color: ${(props) => props.theme.primaryText};
      font-size: 24px;
      font-weight: 700;
      transition: 200ms;
    }
    .progress {
      color: ${limeGreen};
      font-size: 14px;
      font-weight: 700;
    }
  }
`;
