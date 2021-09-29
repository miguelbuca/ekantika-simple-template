import type { AppProps } from 'next/app'
import View from '../src/components/view'

import { ThemeProvider, createGlobalStyle } from 'styled-components'

const theme = {
  colors: {
    primary: 'hsl(249deg 100% 66%)',
    primaryLight: 'hsl(249deg 100% 83%)',
    point: 'hsl(50deg 100% 60%)',
    default: 'hsl(228deg 38% 97%)',
    bg: '#fff',
    defualtFont: '#fff',
    grey: '#8e8e8e',
    darTansparent: 'rgba(0,0,0,0.06)'
  },
  margin: {
    default: '8rem'
  }
}

const GlobalStyle = createGlobalStyle`
    html,
    body {
      padding: 0;
      margin: 0;
      background-color:${theme?.colors?.bg};
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        color: ${theme?.colors?.grey};
    }
    a {
      color: inherit;
      text-decoration: none;
    }

    * {
      box-sizing: border-box;
    }
`

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <View>
        <Component {...pageProps} />
      </View>
    </ThemeProvider>
  )
}
export default App
