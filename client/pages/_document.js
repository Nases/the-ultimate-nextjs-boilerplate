import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="This is NextJS - Express Authentication Starter" />
          <meta name="viewport" content="width=device-width,height=device-height initial-scale=1" />
          <link rel="shortcut icon" href="/favicon.png" />
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
          <script src="https://kit.fontawesome.com/c9c5a1adc4.js" crossOrigin="anonymous"></script>
        </Head>
        <body className='min-h-screen bg-gray-50'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument