import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

interface MetaProps extends React.PropsWithChildren<{}> {
  url?: string;
  title: string;
  description?: string;
  thumbnail?: string;
  themeColor?: string;
  canonicalUrl?: string;
  largeThumbnail?: string;
  keywords?: string;
  twitterUsername?: string;
}

const NextSEO = (props: MetaProps) => {
  const loading = "Loading...";
  const {
    title = loading,
    description = loading,
    thumbnail,
    themeColor = "#000000",
    canonicalUrl,
    keywords,
    twitterUsername,
  } = props;

  return (
    <Head>
      {/* <!-- Primary Meta Tags --> */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {/* <!-- Open Graph / Facebook / Pinterest --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={thumbnail} />
      {/* <!-- Twitter --> */}
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      {/* google-site-verification */}
      <meta
        name="google-site-verification"
        content="F046ObHYj9XEf_1NLV-X5-GnQ0ohQ8hWQArJfuBMzWw"
      />
      <meta name="twitter:site" content={twitterUsername} />
      <meta property="twitter:image" content={thumbnail} />
      <meta property="twitter:card" content="summary_large_image" />
      {/* GENERAL */}
      <link rel="canonical" href={canonicalUrl} />
      {/* <link rel="canonical" href={`https://bedsdivans.co.uk${asPath}`} /> */}
      <meta name="keywords" content={keywords} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="theme-color" content={themeColor} />
      {/* FAVICONS */}
      <link rel="icon" href="favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/fav-icons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/fav-icons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/fav-icons/favicon-16x16.png"
      />

      <link
        rel="apple-touch-icon-precomposed"
        sizes="57x57"
        href="/fav-icons/apple-touch-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="114x114"
        href="/fav-icons/apple-touch-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="72x72"
        href="/fav-icons/apple-touch-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="144x144"
        href="/fav-icons/apple-touch-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="60x60"
        href="/fav-icons/apple-touch-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="120x120"
        href="/fav-icons/apple-touch-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="76x76"
        href="/fav-icons/apple-touch-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="152x152"
        href="/fav-icons/apple-touch-icon-152x152.png"
      />
      <link
        rel="icon"
        type="image/png"
        href="/fav-icons/favicon-196x196.png"
        sizes="196x196"
      />
      <link
        rel="icon"
        type="image/png"
        href="/fav-icons/favicon-96x96.png"
        sizes="96x96"
      />
      <link
        rel="icon"
        type="image/png"
        href="/fav-icons/favicon-32x32.png"
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/png"
        href="/fav-icons/favicon-16x16.png"
        sizes="16x16"
      />
      <link
        rel="icon"
        type="image/png"
        href="/fav-icons/favicon-128.png"
        sizes="128x128"
      />
      <link
        rel="apple-touch-icon"
        href="/fav-icons/android-chrome-192x192.png"
      />
      {/* GOOGLE ANALYTICS */}
      {props.children}
    </Head>
  );
};
export default NextSEO;
