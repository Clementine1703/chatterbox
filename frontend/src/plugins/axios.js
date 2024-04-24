import store from '@/store';
import axios from 'axios'

// doing something with the response
axios.interceptors.response.use(
    (response) => {
        console.log('akak', response.status)
       
        return response;
    },
    (error) => {
        // all 4xx/5xx responses will end here
        console.error('popa', error)

        switch(error.code){
        case 'ERR_NETWORK':
            store.dispatch('notifications/callNotification',
             {message: 'Ошибка соединения с сервером.', color: 'negative'})  
            break
        }

        switch(error.response.status){
            case 401:
                store.dispatch('notifications/callNotification',
                 {message: `${ error.response.data.detail }`, color: 'negative'})  
                break
            }
       
       return Promise.reject(error);
    }
  );

export default axios