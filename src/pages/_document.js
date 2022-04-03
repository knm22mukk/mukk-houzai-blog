import Document, { Html, Head, Main, NextScript } from 'next/document';
import siteMetadata from '../data/siteMetadata';
import { GA_ID } from '../libs/gtag';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='ja'>
        <Head>
          <meta name='application-name' content={siteMetadata.title} />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-status-bar-style' content='default' />
          <meta name='apple-mobile-web-app-title' content={siteMetadata.title} />
          <meta name='format-detection' content='telephone=no' />
          <meta name='mobile-web-app-capable' content='yes' />

          <meta
            name='google-site-verification'
            content='DEiylquI5g8ddrrmXiJ-y6wxPw5Ixb0J2i9eepmGkvY'
          />

          <link rel='apple-touch-icon' sizes='57x57' href='/images/apple-touch-icon-57x57.png' />
          <link rel='apple-touch-icon' sizes='60x60' href='/images/apple-touch-icon-60x60.png' />
          <link rel='apple-touch-icon' sizes='72x72' href='/images/apple-touch-icon-72x72.png' />
          <link rel='apple-touch-icon' sizes='76x76' href='/images/apple-touch-icon-76x76.png' />
          <link
            rel='apple-touch-icon'
            sizes='114x114'
            href='/images/apple-touch-icon-114x114.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='120x120'
            href='/images/apple-touch-icon-120x120.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='144x144'
            href='/images/apple-touch-icon-144x144.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='152x152'
            href='/images/apple-touch-icon-152x152.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/images/apple-touch-icon-180x180.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='192x192'
            href='/images/android-chrome-192x192.png'
          />
          <link rel='icon' type='image/png' sizes='32x32' href='/images/icon-32x32.png' />
          <link rel='icon' type='image/png' sizes='96x96' href='/images/icon-96x96.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/images/icon-16x16.png' />

          {GA_ID && (
            <>
              <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_path: window.location.pathname,
            });
        `,
                }}
              />
            </>
          )}
          <script
            async
            src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6926886407725555'
            crossOrigin='anonymous'
          ></script>

          <meta
            name='google-site-verification'
            content='DBMn2-s718dLfuIuNx2w-brSKq-NlgtHPTHBxWJWkhE'
          />
        </Head>
        <body className='bg:text-white bg-gray-50 dark:bg-gray-800'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
