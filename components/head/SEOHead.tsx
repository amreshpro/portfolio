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
      <meta property="og:title" content="Amresh Maurya| Backend Developer Portfolio" />
      <meta
        property="og:description"
        content="Passionate backend developer with expertise in Golang, Java, Microservices & scalable system design."
      />
      <meta property="og:image" content="/preview.png" /> {/* Replace with actual image */}
      <meta property="og:url" content="https://amreshmaurya.com" />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="/preview.png" />
      <meta name="twitter:title" content="Amresh | Backend Developer Portfolio" />
      <meta
        name="twitter:description"
        content="Golang & Java backend developer with real-world projects and clean code."
      />
      <meta name="twitter:image" content="/preview.png" />

      {/* Canonical URL */}
      <link rel="canonical" href="https://amreshmaurya.com" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.png" />

      {/* Keywords for SEO (optional but helpful) */}
      <meta
        name="keywords"
        content="Amresh, Backend Developer, Golang Developer, Java Developer, Spring Boot, Microservices, Portfolio, Software Engineer, System Design"
      />
      <meta name="author" content="Amresh Maurya" />
    </Head>
  )
}
