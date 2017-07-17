module.exports = function (source) {
	console.log('First Loader source:', source)
	return `
		<template>
			<h1>Vue</h1>
		</template>
	`
}