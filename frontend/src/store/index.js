import { createStore } from "vuex";
import account from './modules/account'
import notifications from './modules/notifications'


const store = new createStore({
    modules: {
      account: account,
      notifications: notifications,
    }
  })

export default store