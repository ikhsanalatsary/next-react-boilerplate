import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  render() {
    /* eslint-disable react/react-in-jsx-scope, jsx-a11y/html-has-lang */
    const sheet = new ServerStyleSheet();
    const main = sheet.collectStyles(<Main />);
    const styleTags = sheet.getStyleElement();
    return (
      <html lang="en">
        <Head>
          <title>React Boilerplate Next</title>
          <meta
            name="description"
            content="NextJS with additional tech feature like react-boilerplate"
          />
          <meta
            name="keywords"
            content="react, reactjs, next, nextjs, react boilerplate, react boilerplate next, javascript, boilerplate, redux, redux saga, immutable"
          />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          {/* PWA primary color */}
          <meta content="IE=edge" httpEquiv="" />
          <base href="/" />
          <meta content="yes" name="mobile-web-app-capable" />
          <meta content="#fff" name="theme-color" />
          <meta
            content="React Boilerplate Next"
            name="apple-mobile-web-app-title"
          />
          <meta content="black" name="apple-mobile-web-app-status-bar-style" />
          <meta content="#fff" name="msapplication-navbutton-color" />
          <link href="/static/manifest.json" rel="manifest" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="static/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            href="static/favicon-32x32.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href="static/favicon-16x16.png"
            sizes="16x16"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="static/android-chrome-192x192.png"
          />
          <link
            rel="mask-icon"
            href="static/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          {styleTags}
        </Head>
        <body>
          <div className="root">{main}</div>
          <NextScript />
        </body>
      </html>
    );
  }
}
