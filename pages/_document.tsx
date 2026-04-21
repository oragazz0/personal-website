import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Primary Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Otavio Ragazzo" />
        <meta name="keywords" content="Otavio Ragazzo, portfolio, developer, software engineer, web development, React, Next.js" />

        {/* Mobile Meta Tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="theme-color" content="#050505" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://oragazzo.com/" />
        <meta property="og:title" content="Otavio Ragazzo - Not a portfolio" />
        <meta property="og:description" content="Otavio Ragazzo's personal website showcasing projects and experiences in software development." />
        <meta property="og:image" content="https://oragazzo.com/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://oragazzo.com/" />
        <meta property="twitter:title" content="Otavio Ragazzo - Not a portfolio" />
        <meta property="twitter:description" content="Otavio Ragazzo's personal website showcasing projects and experiences in software development." />
        <meta property="twitter:image" content="https://oragazzo.com/og-image.jpg" />

        {/* Font Links */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;700;900&family=Space+Grotesk:wght@300;400;500&display=swap" rel="stylesheet" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
