import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SeoProps {
    title?: string;
    description?: string;
    canonical?: string;
    image?: string;
    type?: string;
    keywords?: string;
    author?: string;
    schemaMarkup?: Record<string, any>;
}

const Seo: React.FC<SeoProps> = ({
    title,
    description,
    canonical,
    image,
    type = 'website',
    keywords = "ecommerce analytics, BI reporting, AI insights, shopify analytics, amazon analytics, business intelligence",
    author = "Trilio.ai",
    schemaMarkup
}) => {
    const siteUrl = 'https://trilio.ai';

    // Defaults
    const defaultTitle = "Trilio.ai - Ecommerce Intelligence, Powered by AI";
    const defaultDescription = "Transform your ecommerce data into profitable insights with Trilio.ai. Unified analytics for Shopify, Amazon, and ad platforms with AI-powered recommendations.";
    const defaultImage = "https://trilio.ai/lovable-uploads/9a046283-fff2-4873-a280-f9e479a02c07.png";

    const metaTitle = title || defaultTitle;
    const metaDescription = description || defaultDescription;
    const metaImage = image || defaultImage;

    const fullCanonical = canonical ? (canonical.startsWith('http') ? canonical : `${siteUrl}${canonical}`) : siteUrl;
    const fullImage = metaImage.startsWith('http') ? metaImage : `${siteUrl}${metaImage}`;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{metaTitle}</title>
            <meta name="description" content={metaDescription} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />
            <link rel="canonical" href={fullCanonical} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={metaTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={fullImage} />
            <meta property="og:url" content={fullCanonical} />
            <meta property="og:site_name" content="Trilio.ai" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={metaTitle} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={fullImage} />

            {/* Structured Data */}
            {schemaMarkup && (
                <script type="application/ld+json">
                    {JSON.stringify(schemaMarkup)}
                </script>
            )}
        </Helmet>
    );
};

export default Seo;
