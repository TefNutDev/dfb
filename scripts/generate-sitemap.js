const sitemap = require('nextjs-sitemap-generator');
const path = require('path');

sitemap ({
    baseUrl: 'dfbuildingservices.vercel.app',
    pagesDirectory: path.resolve(__dirname, '../out/'),
    targetDirectory: path.resolve(__dirname, '../out/'),
    ignoredExtensions: ['js', 'json', 'jpeg', 'jpg', 'icon', 'xml', 'png'],
    ignoredPaths: ['404', 'favicon']
});