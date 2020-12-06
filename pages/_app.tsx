import React from 'react';
import { AppProps } from 'next/app';
import '../styles/globals.css';
import 'bootsrap/dist/css/bootstrap.min.css';

import Head from 'next/head';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
  <>
    <Head>
      <title>OneBitGames</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <Component {...pageProps} />
  </>
  )
}

export default MyApp
