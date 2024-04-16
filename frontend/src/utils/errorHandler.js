import store from '@/store';
import { AuthConfirmationError } from '@/errors'

export function errorHandler(err, vm, info){
    // Если было вызвано исключение AuthConfirmationError, удалить из vuex информацию о сеансе
    if (new err() instanceof AuthConfirmationError){
        store.dispatch('notifications/callNotification', {message: 'Похоже, что вы не авторизованы.', color: 'negative'})  
        store.dispatch('account/logout')  
    }

    console.error("Error:", err);
    console.error("Vue component:", vm);
    console.error("Additional info:", info);
}
