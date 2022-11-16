const webpack = require('webpack')
const createProConfig = require('./webpack.prod')

const config = require('./config')

const build = (config) => {
  const compiler = webpack(createProConfig(config))
  compiler.run((err, stats) => {
    if (err) {
      console.error(err.stack || err)
      if (err.details) {
        console.error(err.details)
      }
      return
    }

    const info = stats.toJson()
    if (stats.hasErrors()) {
      console.error(info.errors)
    }

    if (stats.hasWarnings()) {
      console.log(info.warnings)
    }

    process.stdout.write(
      stats.toString({
        children: false,
        chunks: false,
        modules: false,
        chunkModules: false,
        hash: false,
        colors: true,
      }) + '\n\n'
    )

    compiler.close((closeErr) => {
      if (closeErr) {
        console.error(closeErr)
      }
    })
  })
}

build(config)
