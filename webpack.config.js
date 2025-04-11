const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
	entry: {
		index: './src/index.js',
	},
	resolve: {
		modules: [path.resolve(__dirname, 'src'), 'node_modules'],
	},
	output: {
		filename: 'index_bundle.[contenthash].js',
		path: path.join(__dirname, '/dist'),
	},
	optimization: {
		minimizer: [new CssMinimizerPlugin(), new TerserWebpackPlugin()],
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[hash].[ext]',
						outputPath: 'assets',
					},
				},
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: ['file-loader'],
			},
		],
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: './src/index.html',
			favicon: './src/assets/icons/camera_logo.png',
		}),
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css',
		}),
	],
};
