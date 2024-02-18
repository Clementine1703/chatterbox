import { Notify } from 'quasar';


export default {
    namespaced: true,
    state: {},
    getters: {},
    mutations: {},
    actions: {
        // eslint-disable-next-line
        callNotification({}, {message, color, position = 'bottom'}){
            Notify.create({
                message,
                color,
                position: position,
                actions: [{ icon: 'close', color: 'white', round: true}]
            });
        }
    }
}