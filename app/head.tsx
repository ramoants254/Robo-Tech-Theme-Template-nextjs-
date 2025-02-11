export default function Head() {
  return (
    <>
      <title>QuantumFlow - Future of Robotics</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Experience quantum-powered AI robots that transcend the boundaries of possibility" />
      
      {/* Resource Hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Preload Critical Assets */}
      <link
        rel="preload"
        href="/fonts/your-main-font.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      
      {/* Progressive Web App */}
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#0a0b1e" />
      <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
      
      {/* Open Graph */}
      <meta property="og:title" content="QuantumFlow - Future of Robotics" />
      <meta property="og:description" content="Experience quantum-powered AI robots that transcend the boundaries of possibility" />
      <meta property="og:image" content="/images/og-image.jpg" />
      <meta property="og:url" content="https://quantumflow.com" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="QuantumFlow - Future of Robotics" />
      <meta name="twitter:description" content="Experience quantum-powered AI robots that transcend the boundaries of possibility" />
      <meta name="twitter:image" content="/images/twitter-image.jpg" />
    </>
  );
}
