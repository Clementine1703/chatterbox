import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import router from '@/router'
import vuex from '@/store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCookies from 'vue-cookies'

import { errorHandler } from './utils/errorHandler'

const app = createApp(App)

app.config.errorHandler = errorHandler

app
    .use(Quasar, quasarUserOptions)
    .use(router)
    .use(vuex)
    .use(VueAxios, axios)
    .use(VueCookies)
    .mount('#app')
