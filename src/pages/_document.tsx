import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang='fr'>
        <Head>
          <link rel='preload' href='/fonts/Bellefair/Bellefair-Regular.ttf' as='font' crossOrigin='' />
          <link rel='preload' href='/fonts/Barlow/BarlowCondensed-Bold.ttf' as='font' crossOrigin='' />
          <link rel='preload' href='/fonts/Barlow/BarlowCondensed-SemiBold.ttf' as='font' crossOrigin='' />
          <link rel='preload' href='/fonts/Barlow/BarlowCondensed-Regular.ttf' as='font' crossOrigin='' />
        </Head>
        <body>
        <Main />
        <NextScript />
        </body>
      </Html>
    )
  }

}
