const {merge} = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common')

const devConfig = {
	mode: 'development',
	output: {
		filename: '[name][contenthash].js',
		publicPath: '/',
	},
	devServer: {
		port: '8080',
		historyApiFallback: {
			index: '/index.html'
		}
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
		new ModuleFederationPlugin({
			name: 'container',
			remotes: {
				products: 'products@http://localhost:8081/remoteEntry.js',
				cart: 'cart@http://localhost:8082/remoteEntry.js',
			},
		}),
	]
}

module.exports = merge(commonConfig, devConfig)