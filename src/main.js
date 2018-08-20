// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store.js'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import locale from 'element-ui/lib/locale/lang/ja'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

Vue.config.productionTip = false
Vue.use(Element, { locale })

var config = {
  apiKey: 'AIzaSyClIf5jKQF4Vy6rSvHbnyDCXXlBfyNHl3Q',
  authDomain: 'excursion-299ea.firebaseapp.com',
  databaseURL: 'https://excursion-299ea.firebaseio.com',
  projectId: 'excursion-299ea',
  storageBucket: 'excursion-299ea.appspot.com',
  messagingSenderId: '861518226091'
}
firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
