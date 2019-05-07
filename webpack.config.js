const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},
  resolve: {
    modules: [".", "/node_modules", "/assets"],
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
			// Process JS with Babel.
			{
				test: /\.(js|jsx|mjs)$/,
				use: ['babel-loader'],
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
