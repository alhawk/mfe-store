const {merge} = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common')
const packageJson = require('../package.json')

const devConfig = {
	mode: 'development',
	output: {
		filename: '[name][contenthash].js',
		publicPath: '/'
	},
	devServer: {
		port: '8081',
		historyApiFallback: {
			index: '/index.html'
		}
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html'
		}),
		new ModuleFederationPlugin({
            name: 'products',
            filename: 'remoteEntry.js',
            exposes: {
                './ProductsIndex': './src/bootstrap.js',
            },
            shared: packageJson.dependencies,
        }),
	]
}

module.exports = merge(commonConfig, devConfig)