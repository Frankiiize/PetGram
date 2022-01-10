const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
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
    })
  ],
}