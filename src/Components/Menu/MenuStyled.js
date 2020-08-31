import styled from "styled-components";
import { toggle, veryDarkBlueBg, fontFamily } from "../../GlobalStyles/Colors";

export const DivFlexBetween = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: auto;
  padding: 10px 0px 10px 0px;
`;

export const LogoTitle = styled.h1`
  font-family: ${fontFamily};
  font-size: 25px;
  color: ${(props) => props.theme.primaryText};
  margin-top: 20px;
`;

export const Description = styled.h2`
  font-family: ${fontFamily};
  font-size: 14px;
  color: ${(props) => props.theme.secundaryText};
  font-weight: 400;
  margin-bottom: 40px;
`;

export const CheckboxDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 130px;

  span {
    color: ${(props) => props.theme.secundaryText};
    font-family: ${fontFamily};
  }
`;

export const SwitchTheme = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 24px;

  /* Hide default HTML checkbox */
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${toggle};
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
  }

  input:checked + .slider:before {
    transform: translateX(16px);
    background-color: ${veryDarkBlueBg};
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;
