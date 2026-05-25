// app/sitemap.ts

export default function sitemap() {
    return [
        {
            url: 'https://www.mardiansyah.tech',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: 'https://www.mardiansyah.tech/muhammad-mardiansyah-cv',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },

    ];
}