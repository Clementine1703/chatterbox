// Функция-хэлпер для проверки существования свойства в объекте
function hasProperty(obj, prop) {
    return obj !== null && typeof obj === 'object' && obj.hasOwnProperty(prop);
  }
  
  // Функция-хэлпер для проверки, что значение не null или undefined
function isDefined(value) {
    return value !== null && value !== undefined;
  }