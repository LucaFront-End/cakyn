import { Helmet } from 'react-helmet-async'

/**
 * SEO Head — renders <title> and <meta name="description"> per page.
 * Place at the top of every page component.
 */
export default function SEOHead({ title, description }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  )
}
