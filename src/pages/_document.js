import Document, { Html, Head, Main, NextScript } from 'next/document';
import siteMetadata from '../data/siteMetadata';

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
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
