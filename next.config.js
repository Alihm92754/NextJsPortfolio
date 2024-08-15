const { withNextVideo } = require('next-video/process')

/** @type {import('next').NextConfig} */
const nextConfig = {
    moduleResolution: true
}

module.exports = withNextVideo(nextConfig)
