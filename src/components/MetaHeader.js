import React from 'react';
import Head from 'next/head';
import og_image_src from '../assets/images/og/og.jpg';
import favicon from '../assets/images/favicons/icons/favicon.ico';
import favicon_16 from '../assets/images/favicons/icons/favicon-16x16.png';
import favicon_32 from '../assets/images/favicons/icons/favicon-32x32.png';
import favicon_57 from '../assets/images/favicons/icons/favicon-57x57.png';
import favicon_60 from '../assets/images/favicons/icons/favicon-60x60.png';
import favicon_70 from '../assets/images/favicons/icons/favicon-70x70.png';
import favicon_72 from '../assets/images/favicons/icons/favicon-72x72.png';
import favicon_76 from '../assets/images/favicons/icons/favicon-76x76.png';
import favicon_96 from '../assets/images/favicons/icons/favicon-96x96.png';
import favicon_114 from '../assets/images/favicons/icons/favicon-114x114.png';
import favicon_120 from '../assets/images/favicons/icons/favicon-120x120.png';
import favicon_144 from '../assets/images/favicons/icons/favicon-144x144.png';
import favicon_150 from '../assets/images/favicons/icons/favicon-150x150.png';
import favicon_152 from '../assets/images/favicons/icons/favicon-152x152.png';
import favicon_180 from '../assets/images/favicons/icons/favicon-180x180.png';
import favicon_192 from '../assets/images/favicons/icons/favicon-192x192.png';
import favicon_310 from '../assets/images/favicons/icons/favicon-310x310.png';

export default function Metaheader({
  title = 'Leonardo Gil Abogado Penalista',
  description = 'Leonardo Gil Abogado Penalista',
  keywords = 'abogado penalista en colombia',
  og_image = og_image_src,
  author = 'Leonardo Gil',
  site_name = 'Leonardo Gil',
  url = 'https://leonardogil.com',
  domain = 'leonardogil.com',
  twitter_handle = '@leonardogil',
}) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <base href="" target="_self" />
        <title>{title}</title>
        <meta name="author" content={author} />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords}></meta>
        <meta property="og:description" content={description} />
        <meta property="og:image" content={og_image} />
        <meta property="og:site_name" content={site_name} />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content={domain} />
        <meta property="twitter:url" content={url} />
        <meta name="twitter:site" content={twitter_handle} />
        <meta name="twitter:creator" content={twitter_handle} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={og_image} />
        <link rel="apple-touch-icon" sizes="57x57" href={favicon_57.src} />
        <link rel="apple-touch-icon" sizes="60x60" href={favicon_60.src} />
        <link rel="apple-touch-icon" sizes="72x72" href={favicon_72.src} />
        <link rel="apple-touch-icon" sizes="76x76" href={favicon_76.src} />
        <link rel="apple-touch-icon" sizes="114x114" href={favicon_114.src} />
        <link rel="apple-touch-icon" sizes="120x120" href={favicon_120.src} />
        <link rel="apple-touch-icon" sizes="144x144" href={favicon_144.src} />
        <link rel="apple-touch-icon" sizes="152x152" href={favicon_152.src} />
        <link rel="apple-touch-icon" sizes="180x180" href={favicon_180.src} />
        <link rel="icon" type="image/png" sizes="16x16" href={favicon_16.src} />
        <link rel="icon" type="image/png" sizes="32x32" href={favicon_32.src} />
        <link rel="icon" type="image/png" sizes="96x96" href={favicon_96.src} />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href={favicon_192.src}
        />
        <link rel="shortcut icon" type="image/x-icon" href={favicon.src} />
        <link rel="icon" type="image/x-icon" href={favicon.src} />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content={favicon_144.src} />
        <meta
          name="msapplication-config"
          content="../assets/images/favicons/icons/browserconfig.xml"
        />
      </Head>
    </>
  );
}
