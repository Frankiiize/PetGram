const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest')
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js',
    hashFunction: "xxhash64",
    publicPath: '/'
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
          options: {
            presets : [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader'
					}
				]
			},
      {
        test: /\.(png|jpeg|gif|svg)$/i,
        type: 'asset'
        
      },
	
		]
	},
  devServer: {
    static: path.join(__dirname,'dist'),
    compress: true,
    port: 3005,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html'
    }),
    new WebpackPwaManifestPlugin({
      filename: 'manifest.webmanifest',
      name: 'Petgram',
      description: 'Tu app preferida para encontrar esas mascotas que tanto te encantan',
      orientation: 'portrait',
      display: 'standalone',
      start_url: '/',
      scope: '/',
      background_color: '#456BD9',
      theme_color: '#456BD9',
      icons: [
        {
          src:path.resolve('src/assets/icon.png'),
          sizes: [ 96, 128, 256, 384, 512]
        },
        {
          src: path.resolve('src/assets/icon.png'),
          size: '1024x1024',
          purpose: 'maskable'
        }
      ]
    }),
    new WorkboxPlugin.GenerateSW({
      "navigateFallback": "/index.html",
      "clientsClaim": true,
      "maximumFileSizeToCacheInBytes": 50000000,
      "skipWaiting": true,
      runtimeCaching: [
        {
          urlPattern: new RegExp('https://(res.cloudinary.com | images.unsplash.com)'),
          handler: 'CacheFirst',
          options : {
            cacheName:'images'
          }
        },
        {
          urlPattern: new RegExp('https://petgram-server-frankiiize.vercel.app/'),
          handler: 'NetworkFirst',
          options : {
            cacheName:'api'
            
          }
        }
      ]
    })
  ],
}