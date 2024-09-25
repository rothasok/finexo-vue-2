const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // proxy: 'https://api.tfdevs.com'
    proxy:process.env.VUE_APP_BACKEND
  }
})
