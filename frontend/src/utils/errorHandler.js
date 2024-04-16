import store from '@/store';
import { AuthConfirmationError } from '@/errors'

export function errorHandler(err, vm, info){
    let message = ''

    // Если было вызвано исключение AuthConfirmationError, удалить из vuex информацию о сеансе
    if (new err() instanceof AuthConfirmationError){
        message = 'Похоже, что вы не авторизованы.'
        store.dispatch('notifications/callNotification', {message: message, color: 'negative'})  
        store.dispatch('account/logout')  
    }

    else {
        message = 'Возникла ошибка.\n Больше информации в консоли разработчика.'
        store.dispatch('notifications/callNotification', {message: message, color: 'negative'})  
    }

    console.error("Error:", err);
    console.error("Vue component:", vm);
    console.error("Additional info:", info);
}
