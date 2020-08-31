import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

   *{
       padding: 0;
       margin: 0;
   }

   body {
       background-color: ${(props) => props.theme.bodyBg};
       transition: 200ms;
   }

   button {
       cursor: pointer;
       border: none;
   }
`;

export default GlobalStyle;
