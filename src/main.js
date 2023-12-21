import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueI18n  from 'vue-i18n'
import VueMeta from 'vue-meta'
import enMessages from './locales/en'
import ruMessages from './locales/ru'
import kzMessages from './locales/kz'
import "vuetify/dist/vuetify.min.css"
import router from "./router/router.js"
// import "./styles/styles.css"

Vue.use(VueI18n)
Vue.use(VueMeta< {
  refreshOnceOnNavigation: true,
  meta: [
    { name: "author", content: "akulmakhanov" },
    { name: "description", content: "Аренда звукового оборудования и ноутбуков" },
    { name: "keywords", content: "аренда ноутбуков, ноутбуки, лаптоп, laptops" },
  ]
});

const lang = localStorage.getItem('lang')
const initLang = lang || 'ru'

const i18n = new VueI18n({
  locale: initLang,
  messages: {
    ru: ruMessages,
    en: enMessages,
    kz: kzMessages, 
  },
})

Vue.config.productionTip = false

new Vue({
  vuetify,
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')
