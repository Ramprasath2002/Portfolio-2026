import { createGlobalStyle } from "styled-components";




const GlobalStyle = createGlobalStyle`

*,*::before,*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
    display: inline-block;
}

html{
    width: 100%;
    overflow-x: hidden;
}

body{
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100vh;
    min-height: 100dvh;
    overflow-x: hidden;
    font-family: 'Source Sans Pro',sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

#root{
    width: 100%;
    min-height: 100vh;
    min-height: 100dvh;
}
`

export default GlobalStyle;