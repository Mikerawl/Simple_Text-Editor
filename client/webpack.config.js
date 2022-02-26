const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

const {GenerateSW} = require('workbox-webpack-plugin')


// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.
;
// add service worker
module.exports = () => {
    return {
    mode: 'development',
    // Entry point for filesplugins: 
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js',
      cards: './src/js/cards.js'
    },
    // Output for our bundles
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      
      new GenerateSW(),
      
      new InjectManifest({
      swSrc: './src/sw.js',
    })

    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
  };

  ]
}

// TODO: and manifest file.



  
    
 

// TODO: Add CSS loaders and babel to webpack.


  m

  
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
  
    module: {
      rules: [
        
      ],
    },
  };
};