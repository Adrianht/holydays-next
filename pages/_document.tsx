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
        <Head />
        <body>
          <script src="https://cdn.jsdelivr.net/gh/nwcell/ics.js@0.2.0/ics.deps.min.js" />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
