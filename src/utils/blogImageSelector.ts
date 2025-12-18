/**
 * Deterministically selects a blog featured image based on blog ID
 * This ensures the same blog always gets the same image while distributing
 * images evenly across all blogs
 */

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
    'https://assets.channeliq.ai/trilio-landing/Blogs/BlogSample20.jpg',
    'https://assets.channeliq.ai/trilio-landing/Blogs/BlogSample21.jpg',
    'https://assets.channeliq.ai/trilio-landing/Blogs/BlogSample22.jpg',



];

/**
 * Gets the featured image for a blog based on its ID
 * @param blogId - The unique identifier of the blog post
 * @returns The URL of the selected blog image
 */
export const getBlogImage = (blogId: number): string => {
    const imageIndex = blogId % BLOG_IMAGES.length;
    return BLOG_IMAGES[imageIndex];
};

/**
 * Fallback image in case blog ID is not available
 */
export const getDefaultBlogImage = (): string => {
    return BLOG_IMAGES[0];
};
