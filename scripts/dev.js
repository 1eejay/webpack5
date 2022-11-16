const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')

const createDevConfig = require('./webpack.dev')
const config = require('./config')

const dev = async (config) => {
  const devServerOptions = {
    ...createDevConfig().devServer,
    port: config.port || 3000,
  }
  const compiler = webpack(createDevConfig(config))

  const server = new WebpackDevServer(devServerOptions, compiler)

  await server.start()
  console.log(`server at ${config.port || 3000}`)
}

dev(config)
