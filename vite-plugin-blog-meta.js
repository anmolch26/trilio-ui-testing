/**
 * Vite middleware to inject dynamic meta tags for blog posts
 * This allows social media crawlers (LinkedIn, Facebook, Twitter) to see blog-specific images
 */

// Deterministically select blog image based on blog ID
const BLOG_IMAGES = [
    'https://assets.channeliq.ai/trilio-landing/Blogs/BlogSample1.jpg',
    'https://assets.channeliq.ai/trilio-landing/Blogs/BlogSample2.jpg',
    'https://assets.channeliq.ai/trilio-landing/Blogs/BlogSample3.jpg',
    'https://assets.channeliq.ai/trilio-landing/Blogs/BlogSample4.jpg',
    'https://assets.channeliq.ai/trilio-landing/Blogs/BlogSample5.jpg',
    'https://assets.channeliq.ai/trilio-landing/Blogs/BlogSample6.jpg',
    'https://assets.channeliq.ai/trilio-landing/Blogs/BlogSample7.jpg',
    'https://assets.channeliq.ai/trilio-landing/Blogs/BlogSample8.jpg',
    'https://assets.channeliq.ai/trilio-landing/Blogs/BlogSample9.jpg',
    'https://assets.channeliq.ai/trilio-landing/Blogs/BlogSample10.jpg',
    'https://assets.channeliq.ai/trilio-landing/Blogs/BlogSample11.jpg',
    'https://assets.channeliq.ai/trilio-landing/Blogs/BlogSample12.jpg',
    'https://assets.channeliq.ai/trilio-landing/Blogs/BlogSample13.jpg',
    'https://assets.channeliq.ai/trilio-landing/Blogs/BlogSample14.jpg',
    'https://assets.channeliq.ai/trilio-landing/Blogs/BlogSample15.jpg',
    'https://assets.channeliq.ai/trilio-landing/Blogs/BlogSample16.jpg',
    'https://assets.channeliq.ai/trilio-landing/Blogs/BlogSample17.jpg',
    'https://assets.channeliq.ai/trilio-landing/Blogs/BlogSample18.jpg',
    'https://assets.channeliq.ai/trilio-landing/Blogs/BlogSample19.jpg',
];

function getBlogImage(blogId) {
    const imageIndex = blogId % BLOG_IMAGES.length;
    return BLOG_IMAGES[imageIndex];
}

export function blogMetaTagsMiddleware() {
    return {
        name: 'blog-meta-tags',
        configureServer(server) {
            server.middlewares.use(async (req, res, next) => {
                // Only handle blog post URLs
                const blogUrlPattern = /^\/resources\/blog-insights\/([a-z0-9-]+)\/?$/;
                const match = req.url?.match(blogUrlPattern);

                if (!match) {
                    return next();
                }

                const blogSlug = match[1];

                try {
                    // Fetch blog data from API
                    const apiUrl = `https://staging.trilio.ai/api/auth/v1/blogs/${blogSlug}`;
                    const response = await fetch(apiUrl);

                    if (!response.ok) {
                        return next();
                    }

                    const data = await response.json();
                    const blog = data?.data;

                    if (!blog) {
                        return next();
                    }

                    // Read the index.html
                    const fs = await import('fs');
                    const path = await import('path');
                    const urlModule = await import('url');

                    const __dirname = path.dirname(urlModule.fileURLToPath(import.meta.url));
                    let html = fs.readFileSync(
                        path.resolve(__dirname, 'index.html'),
                        'utf-8'
                    );

                    // Extract blog metadata
                    const title = `${blog.title || 'Blog Post'} | Trilio.ai Blog`;
                    const description = blog.title || 'Read this insightful blog post from Trilio.ai';
                    const image = getBlogImage(Number(blog.id));
                    const blogUrl = `https://trilio.ai/resources/blog-insights/${blogSlug}`;

                    // Replace meta tags
                    html = html
                        // Title
                        .replace(
                            /<title>.*?<\/title>/,
                            `<title>${escapeHtml(title)}</title>`
                        )
                        // Description
                        .replace(
                            /<meta name="description" content=".*?".*?\/>/,
                            `<meta name="description" content="${escapeHtml(description)}" />`
                        )
                        // Canonical
                        .replace(
                            /<link rel="canonical" href=".*?".*?\/>/,
                            `<link rel="canonical" href="${blogUrl}" />`
                        )
                        // OG Title
                        .replace(
                            /<meta property="og:title" content=".*?".*?\/>/,
                            `<meta property="og:title" content="${escapeHtml(title)}" />`
                        )
                        // OG Description
                        .replace(
                            /<meta property="og:description" content=".*?".*?\/>/,
                            `<meta property="og:description" content="${escapeHtml(description)}" />`
                        )
                        // OG Image - THIS IS THE KEY ONE for LinkedIn
                        .replace(
                            /<meta property="og:image" content=".*?".*?\/>/,
                            `<meta property="og:image" content="${image}" />`
                        )
                        // OG URL
                        .replace(
                            /<meta property="og:url" content=".*?".*?\/>/,
                            `<meta property="og:url" content="${blogUrl}" />`
                        )
                        // OG Type
                        .replace(
                            /<meta property="og:type" content=".*?".*?\/>/,
                            `<meta property="og:type" content="article" />`
                        )
                        // Twitter Title
                        .replace(
                            /<meta name="twitter:title" content=".*?".*?\/>/,
                            `<meta name="twitter:title" content="${escapeHtml(title)}" />`
                        )
                        // Twitter Description
                        .replace(
                            /<meta name="twitter:description" content=".*?".*?\/>/,
                            `<meta name="twitter:description" content="${escapeHtml(description)}" />`
                        )
                        // Twitter Image
                        .replace(
                            /<meta name="twitter:image" content=".*?".*?\/>/,
                            `<meta name="twitter:image" content="${image}" />`
                        );

                    // Send the modified HTML
                    res.setHeader('Content-Type', 'text/html');
                    res.end(html);
                } catch (error) {
                    console.error('Error fetching blog meta tags:', error);
                    next();
                }
            });
        },
    };
}

// Helper to escape HTML for meta tag content
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, (m) => map[m]);
}
