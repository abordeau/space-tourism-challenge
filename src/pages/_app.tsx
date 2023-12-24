import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import AppTheme from '@/core/application/components/layout/AppTheme'
import '../styles/fonts.css'
import '../styles/minireset.css'
import GlobalStyle from '@/core/application/components/layout/GlobalStyle'
import Layout from '@/core/application/components/layout/Layout'

export default function App({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={AppTheme}>
    <GlobalStyle />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ThemeProvider>
}
