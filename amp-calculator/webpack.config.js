module.exports = env => {
	return {
		mode: env.development ? 'production' : 'development',
		devtool: env.development ? 'inline-cheap-source-map' : '',
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
	};
};
