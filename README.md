# webpack5

webpack+babel+eslint+stylelint+prettier+vue2

## init

```shell
npm init -y
```

------

## webpack

```shell
npm i -D webpack webpack-cli
```

webpack.config.js

```javascript
// webpack配置
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html"),
    }),
  ],
};
```

src/index.js

```javascript
const element = document.createElement('div')
element.innerHtml = 'Hello Vue!'

const app = document.getElementById('app')
app.appendChild(element)
```

src/index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>vue</title>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
```

package.json

```json
{
	"script": {
		"build": "webpack"
	}
}
```

```shell
npm run build
```

----

## babel

```shell
npm i -D @babel/core @babel/preset-env babel-loader
```

babel.config.js

```javascript
module.exports = (api) => {
	api.cache(true)
	
	const presets = ['@babel/preset-env']
	
	return {
		presets,
	}
}
```

.browserslistrc

```json
> 1%
Last 2 versions
```

webpack.config.js

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
}
```

```shell
npm run build
```

----

## vue

```shell
npm i vue
```

```shell
npm i -D vue-loader vue-template-compiler
```

```shell
mkdir scripts
cd scripts
touch webpack.common.js
touch webpack.dev.js
touch webpack.prod.js
```

webpack.common.js

```javascript
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader']
      },
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx'],
    modules: [path.resolve(__dirname, '../src'), 'node_modules']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html')
    }),
    new VueLoaderPlugin()
  ]
}
```

webpack.dev.js

```javascript
const path = require('path')

const webpack = require('webpack')
const { merge } = require('webpack-merge')

const config = require('./config')
const baseConfig = require('./webpack.common')

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    port: config.port
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
})
```

webpack.prod.js

```javascript
const path = require('path')

const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const baseConfig = require('./webpack.common')

module.exports = merge(baseConfig, {
  mode: 'production',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
    pubicPath: '/'
  },
  plugins: [new CleanWebpackPlugin({})]
})
```

package.sjon

```json
"scripts": {
    "start": "webpack serve --hot --config ./scripts/webpack.dev.js --mode development --open",
    "build": "webpack --config ./scripts/webpack.prod.js --mode production"
  },
```



