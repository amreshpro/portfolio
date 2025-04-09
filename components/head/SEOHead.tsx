// components/SEOHead.tsx
import Head from "next/head";

export default function SEOHead() {
  return (
    <Head>
      {/* Basic Meta */}
      <title>Amresh Maurya| Backend Developer & Software Engineer</title>
      <meta
        name="description"
        content="Hi, I'm Amresh Maurya – a passionate backend developer skilled in Golang, Java, Spring Boot & scalable microservices. Explore my projects, skills & experience here."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="UTF-8" />
      {/* Open Graph Meta (for social sharing) */}
      <meta
        property="og:title"
        content="Amresh Maurya| Backend Developer Portfolio"
      />
      <meta
        property="og:description"
        content="Passionate backend developer with expertise in Golang, Java, Microservices & scalable system design."
      />
      <meta property="og:image" content="/preview.png" />{" "}
      {/* Replace with actual image */}
      <meta property="og:url" content="https://amreshmaurya.com" />
      <meta property="og:type" content="website" />
      {/* Twitter Card */}
      <meta name="twitter:card" content="/preview.png" />
      <meta
        name="twitter:title"
        content="Amresh | Backend Developer Portfolio"
      />
      <meta
        name="twitter:description"
        content="Golang & Java backend developer with real-world projects and clean code."
      />
      <meta name="twitter:image" content="/preview.png" />
      {/* Canonical URL */}
      <link rel="canonical" href="https://amreshmaurya.com" />
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      {/* Keywords for SEO (optional but helpful) */}
      <meta
        name="keywords"
        content="Amresh, Backend Developer, Golang Developer, Java Developer, Spring Boot, Microservices, Portfolio, Software Engineer, System Design"
      />
      <meta name="author" content="Amresh Maurya" />
    </Head>
  );
}
