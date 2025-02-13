import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    proxy: {
      '/reddit': {
        target: 'https://www.reddit.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/reddit/, '')
      },
      '/oauth': {  // Changed from /reddit/oauth to just /oauth
        target: 'https://oauth.reddit.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/oauth/, '')
      }
    }
  }
})