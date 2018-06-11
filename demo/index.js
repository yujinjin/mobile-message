/**
 * 作者：yujinjin9@126.com
 * 时间：2018-03-27
 */
import babelPolyfill from 'babel-polyfill'
import Vue from 'vue'
import vueApp from "./app"
import Message from '../src'
Vue.use(Message);
let VueApp = Vue.extend(vueApp);
new VueApp({name: "app"}).$mount('#app');
