import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import vuex from '@/store'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import VueCookies from 'vue-cookies'


const app = createApp(App)
app
    .use(Quasar, quasarUserOptions)
    .use(router)
    .use(vuex)
    .use(VueCookies)
    .mount('#app')
