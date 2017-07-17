const path = require('path')
const FirstPlugin = require('./site/first-plugin.js')
const md = require('./site/first-md-loader.js')
console.log(path.resolve(__dirname, 'site', 'first-md-loader.js'))

module.exports = {
	entry: './site/build-site.js',
	
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},

	resolveLoader: {
		alias: {
			'md-loader': path.resolve(__dirname, 'site', 'first-md-loader.js')
		}
	},

	module: {
		rules: [
			{
				test: /\.md$/,
				loader: ['vue-loader', 'md-loader']
			}
		]
	},

	plugins: [
		// new FirstPlugin({
		// 	routes: [
		// 		{
		// 			name: '主页',
		// 			path: 'index',
		// 			files: path.resolve(__dirname, 'docs/index.md')
		// 		}
		// 	],
		// 	components: path.resolve(__dirname, 'components')
		// })
	]
}