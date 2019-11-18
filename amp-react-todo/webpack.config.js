module.exports = (env) => ({
	mode: env.production ? 'production' : 'development',
	devtool: !env.production ? 'inline-cheap-source-map' : '',
	entry: './app/index.js',
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	},
	resolve: {
		alias: {
			react: 'preact-compat',
			'react-dom': 'preact-compat'
		}
	}
});
