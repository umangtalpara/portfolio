import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import { siteContent } from '@/content/site'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
}

/**
 * SEO component for meta tags and structured data
 */
export function SEO({
  title,
  description,
  keywords,
  image = '/og-image.png',
}: SEOProps) {
  const location = useLocation()
  const { personal } = siteContent

  const pageTitle = title || siteContent.seo.title
  const pageDescription = description || siteContent.seo.description
  const pageKeywords = keywords || siteContent.seo.keywords
  const origin = typeof window !== 'undefined' ? window.location.origin : ''
  const url = `${origin}${location.pathname}`

  // JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: personal.name,
    jobTitle: personal.title,
    url: origin,
    sameAs: [`https://${personal.linkedin}`],
    email: personal.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: personal.location,
    },
  }

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords.join(', ')} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={`${origin}${image}`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={`${origin}${image}`} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  )
}

