

import Head from 'next/head'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { Loading } from '../components/supports/loading';
import "../styles/globals.css"



export default function MyApp({ Component, pageProps }: any) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page: any) => page)
  

  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const handleStart = (url : string) => {
      url !== router.pathname ? setLoading(true) : setLoading(false);
    };
    const handleComplete = (url : string) => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);


  return getLayout(
    <>
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

          <title>Delivery Express </title>
          
        </Head>
        <>
          <Loading loading={loading} />  
          <Component {...pageProps} />
          <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
         
    </>
  )
}
