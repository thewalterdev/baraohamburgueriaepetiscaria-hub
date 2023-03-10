import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Inter"; 
    }

    #root {
        width: 100%;
        height: 100vh;
    }
`

export default GlobalStyle