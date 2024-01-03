import 'styles/globals.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from 'store';
import { Provider } from 'react-redux';
import Script from 'next/script';
import React, { useState } from 'react';
import { AppPropsWithLayout } from 'typings/layout';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import Head from 'next/head';
import SSROutset from 'layout/provider';
import { persistStore } from 'redux-persist';

// import 'bootstrap/dist/css/bootstrap.min.css'
function RootApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  //REACT QUERY
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnReconnect: true,
            retry: false,
            refetchOnMount: true,
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  return (
    <React.Fragment>
      <Script src="https://x.klarnacdn.net/kp/lib/v1/api.js" async />
      <Head>
        <script
          type="text/javascript"
          src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
          async
        ></script>
        <script
          async
          src="https://static-eu.payments-amazon.com/checkout.js"
        ></script>
      </Head>
      <Provider store={store}>
        <SSROutset persistor={persistStore(store)}>
          {getLayout(
            <QueryClientProvider client={queryClient}>
              <Hydrate state={pageProps.dehydratedState}>
                <Component {...pageProps} />
              </Hydrate>
            </QueryClientProvider>
          )}
        </SSROutset>
      </Provider>
    </React.Fragment>
  );
}
export default RootApp;

{
  /* <NextSEO
      title={
        "Beds Divans | Beds from the UK's Leading Bed and Mattress Manufacturers"
      }
      description={
        "Shop online for all kinds of beds, mattresses, and more from top brands with free nationwide delivery. All sizes are available. We guarantee your comfort. We will never be beaten on price!"
      }
    /> */
}
{
  /* <PersistGate loading={null} persistor={persistor}>
    {() => <Component {...pageProps} />}
</PersistGate> */
}

{
  /* <Script
        src="https://static-eu.payments-amazon.com/OffAmazonPayments/uk/sandbox/js/Widgets.js"
        async
      /> */
}
{
  /* <Script src="https://static-eu.payments-amazon.com/checkout.js" async /> */
}
{
  /* <Script id="amazon" strategy="afterInteractive">
        {`window.onAmazonLoginReady = function () {
        amazon.Login.setClientId('amzn1.application-oa2-client.78a09ba05239471a938c8cb9a83d08c4');
        amazon.Login.setUseCookie(true);
    };`}
      </Script> */
}
