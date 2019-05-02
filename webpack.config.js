const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.(png|svg|jpg|gif|wav)$/,
				use: [
					'file-loader',
				],
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 3000,
		disableHostCheck: true,
	},
};
