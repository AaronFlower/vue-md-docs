console.log('Hello')
import Vue from 'vue'
import Docs from './docs.vue'

new Vue({
	el: '#app',
	render: h => h(Docs)
})