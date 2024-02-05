<template>
    <q-page class="flex flex-center">
        <q-card class="auth-card bg-primary text-white dinot-font q-pa-sm">
                <q-card-section style="opacity: 0.9;" class="q-pa-lg">
                    <div class="text-h5">ПРИВЕТСТВУЕМ В CHATTERBOX</div>
                    <div class="text-subtitle1">ДАВАЙТЕ ЗНАКОМИТЬСЯ!</div>
                </q-card-section>

                <q-card-section>
                    <q-input bg-color="white" standout outlined bottom-slots v-model="login" label="Логин">
                    </q-input>
                    <q-input bg-color="white" standout outlined bottom-slots v-model="email" label="Почта">
                    </q-input>
                    <q-input bg-color="white" standout outlined bottom-slots v-model="password" label="Пароль" type="password">
                    </q-input>
                    <div  class="row justify-between">
                        <q-btn style="opacity: 0.75;" color="grey-1" text-color="black" label="Уже есть аккаунт" :to="{ name: 'authentication'}" />
                        <q-btn style="opacity: 0.75;" color="grey-1" text-color="black" label="Отправить" />
                    </div>
                </q-card-section>
        </q-card>
    </q-page>
  </template>
  
  <script>
  import { defineComponent } from 'vue'
  
  export default defineComponent({
    name: 'RegistrationCard',
    data() {
      return {
        login: '',
        password: '',
        email: '',
      }
    },
  })
  </script>

  
<style scoped lang="scss">
    .auth-card{
    width: 450px;
    height: 450px;
}

</style>
  