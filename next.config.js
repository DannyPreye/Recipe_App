/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    apiKey: '0922088bf3434b8b9dedec0e202e3845'
  },
  images: {
    domains: ['https:/spoonacular.com/recipeImages/'],
  },

}

module.exports = nextConfig
