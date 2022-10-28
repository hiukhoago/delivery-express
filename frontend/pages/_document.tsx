import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
require('dotenv').config()

export default function Document() {
    return (
        <Html lang="en">
        <Head>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="application-name" content="App" />
          {/* <script
            src={`https://maps.googleapis.com/maps/api/js?key=${process.env.MAP_KEY}&callback=initMap&libraries=&v=weekly`}
            async
          ></script> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
}