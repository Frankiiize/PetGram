import { createGlobalStyle } from "styled-components";
import { onUpPlaceholder } from "./animation";
const colorPallete = {
  primary: "rgb(247, 247, 247)",
  secondary: "rgb(194, 180, 66)",
  tertiary: "rgb(63, 63, 68)",
  onLine: "rgb(109,219,83)",
  border: "rgb(235, 235, 235)",
  borderDark: "rgb(204, 204, 204)",
}
const fonts = {
  primary: 'Roboto Condensed, sans-serif'
}
const GlobalStyle = createGlobalStyle`
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    html {
          box-sizing: border-box;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }
        
        *,*::before, *::after {
                box-sizing: inherit;
        }
        
        ul, li, h1, h2, h3, p, button {
                margin: 0;
        }

        ul {
                list-style: none;
        }

        button {
                background: transparent;
                border: 0;
                outline: 0;
        }

        body {
                background: #fefefe;
                height: 100vh;
                margin: 0 auto;
                overscroll-behavior: none;
                width: 100%;
        }

        #app {
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
                overflow-x: hidden;
                min-height: 100vh;
                padding-bottom: 10px;
        }
        .inputSelected{
          ${onUpPlaceholder()}
            background-color: white;
            padding: 5px;
            top:-11px;
        }
`;

export { GlobalStyle, colorPallete, fonts };
