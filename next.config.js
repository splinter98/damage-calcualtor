/**
 * @type {import('next').NextConfig}
 */

const withPWA = require('next-pwa')({
    dest: 'public'
})

const nextConfig = {
    output: 'export',
    // Optional: Add a trailing slash to all paths `/about` -> `/about/`
    // trailingSlash: true,
    // Optional: Change the output directory `out` -> `dist`
    // distDir: 'dist',
    basePath: '/damage-calcualtor',
}

module.exports = withPWA(nextConfig)