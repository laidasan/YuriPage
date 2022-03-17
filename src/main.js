import { createApp, h } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { i18n } from './i18n'

// const vm = createApp(App).use(i18n()).use(store).use(router).mount('#app')

const vm = createApp({
  render () {
    return h(App)
  }
})
  .use(i18n())
  .use(store)
  .use(router)
  .mount('#app')
