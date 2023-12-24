import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    html {
        font-family: 'Bellefair', sans-serif;
        font-size: 10px;
        height: 100dvh;
        scroll-behavior: smooth;
    }

    body {
        height: 100%;
        width: 100%;
        margin: 0;
        font-size: ${({ theme }) => theme.size.text};
        color: ${({ theme }) => theme.color.secondary};
    }

    #__next {
        min-height: 100dvh
    }
`


export default GlobalStyle
