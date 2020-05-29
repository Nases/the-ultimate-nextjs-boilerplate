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
          <meta name="viewport" content="width=device-width,height=device-height initial-scale=1" />
          <link rel="shortcut icon" href="/img/favicon/favicon.png" />
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" /> {/* tailwindui css */}
          <script src="https://kit.fontawesome.com/c9c5a1adc4.js" crossOrigin="anonymous"></script>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&display=swap" rel="stylesheet" />
        </Head>
        <body className='bg-gray-50'>
          <Main />
          <NextScript />
          <script src='https://cdnjs.cloudflare.com/ajax/libs/parsley.js/2.9.2/parsley.min.js'></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument