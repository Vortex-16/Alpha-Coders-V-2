import React from 'react';

const JsonLd = () => {
    const organizationJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Alpha Coders',
        url: 'https://alphacodres.vercel.app',
        logo: 'https://alphacodres.vercel.app/AlphaCoders.png',
        sameAs: [
            'https://github.com/Alpha4Coders',
            'https://discord.gg/5p4wkAykV',
            'https://x.com/Alpha4Coders',
            'https://www.instagram.com/alpha.coder.s/',
            'https://www.linkedin.com/company/alpha4coders',
        ],
        description: 'A elite community of passionate developers and open-source contributors from India.',
        address: {
            '@type': 'PostalAddress',
            addressCountry: 'IN',
        },
    };

    const websiteJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Alpha Coders',
        url: 'https://alphacodres.vercel.app',
        potentialAction: {
            '@type': 'SearchAction',
            target: {
                '@type': 'EntryPoint',
                urlTemplate: 'https://alphacodres.vercel.app/search?q={search_term_string}',
            },
            'query-input': 'required name=search_term_string',
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
            />
        </>
    );
};

export default JsonLd;
