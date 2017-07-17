const fs = require('fs')
const vueLoader = require('vue-loader')
const path = require('path')
const marked = require('marked')
const renderer = new marked.Renderer()
const global = this

renderer.code = (snippt, lang) => {
	console.log('\n renderer.code', lang)
	console.log(snippt)
	console.log('\n')
	return lang
}

function FirstPlugin (options) {
	this.options = options  || {
		source: {
			'docs': './docs'
		}
	}
}



FirstPlugin.prototype.apply = function (comipler) {
	let {routes, components} = this.options
	console.log('Outer this.options:', this.options)
	comipler.plugin('emit', function (compilation, callback) {
		/**
		 * docs handler
		 */
		for (var i = routes.length - 1; i >= 0; i--) {
			let route = routes[i]
			let html = ''
			let data = fs.readFileSync(route.files, 'utf8')
			html = marked(data.toString())
			compilation.assets[route.path] = {
				source: () => html,
				size: () => html.length
			}
		}

		/**
		 * components handler
		 */
		if (components) {
			fs.readdirSync(components).forEach(component => {
				let index = path.resolve(components, component, 'index.md')
				let demosDir = path.resolve(components, component, 'demo')
				let demos = []
				fs.readdirSync(demosDir).forEach(demoFile => {
					let demo = path.resolve(components, component, 'demo', demoFile)
					let demoData = fs.readFileSync(demo, 'utf8').toString()
					let tokens = marked.lexer(demoData)
					let styles = []
					let template = ''
					let js = ''
					let deleteIndices = []
					tokens.forEach((token, index) => {
						if (token.type === 'code') {
							switch(token.lang) {
								case 'html': 
									template = token.text
									deleteIndices.push(index)
									break
								case 'javascript':
									js = token.text
									deleteIndices.push(index)
									break
								case 'css': 
									styles.push(token.text)
									deleteIndices.push(index)
									break
							}
						}
					})
					// deleteIndices.forEach((index) => {
					// 	tokens.splice(index, 1)
					// })
					let vueFile = `
						${template}
						${js}
						<style>
						${styles.join('\n')}
						</style>
					`
					console.log('vueFile:', vueFile)
					console.log('vueLoaderFile', vueLoader(vueFile))
				})
				let data = fs.readFileSync(index, 'utf8').toString()
				let tokens = marked.lexer(data)
				console.log('\n\ntokens >>>>>>')
				console.log(tokens)
				console.log('<<<<\n\n')
				console.log(marked(data, {renderer: renderer}, function (err, content) {
					console.log('content:::', content)
					return 'Kid'
				}))
			})
		}

		/**
		 * foo 
		 */
		let foo = 'Hello World!'
		compilation.assets['first.md'] = {
			source: function () {
				return foo
			},
			size: function () {
				return foo.length
			}
		} 
		callback()
	})
}

module.exports = FirstPlugin