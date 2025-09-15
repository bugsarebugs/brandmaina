/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://brandmaina.com',
  generateRobotsTxt: true, // (optional)
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      // You can add disallow rules here if needed
    ],
  },
};
