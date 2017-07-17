console.log('Hello')
import Vue from 'vue'
import mdTest from '../docs/index.md'

new Vue({
	el: '#app',
	render: h => h(mdTest)
})