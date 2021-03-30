/* eslint-disable */
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="dns-prefetch" href="//fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Karla:wght@300;700&display=swap" rel="stylesheet" /> 
        </Head>
        <body>
          <script src="https://cdn.jsdelivr.net/gh/nwcell/ics.js@0.2.0/ics.deps.min.js" async defer/>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
