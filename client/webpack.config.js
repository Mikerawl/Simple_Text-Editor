const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker 
// Inside of webpack.config.js:
const {GenerateSW} = require('workbox-webpack-plugin');

module.exports = {
  plugins: [
  new GenerateSW()
  ]
};

// and manifest file.
const {InjectManifest} = require('workbox-webpack-plugin');

module.exports = {
  plugins: [
    new InjectManifest({
      swSrc: './src/sw.js',
    })
 

// TODO: Add CSS loaders and babel to webpack.
module.exports = {

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
        loader: 'babel-loader',
        options: {
        presets: ['@babel/preset-env']
        }
      }
    }
  ]
}

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      
    ],

    module: {
      rules: [
        
      ],
    },
  };
};
]
};