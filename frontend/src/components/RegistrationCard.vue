<template>
    <q-page class="flex flex-center">
        <q-card class="auth-card bg-primary text-white dinot-font q-pa-sm">
                <q-card-section style="opacity: 0.9;" class="q-pa-lg">
                    <div class="text-h5">ПРИВЕТСТВУЕМ В CHATTERBOX</div>
                    <div class="text-subtitle1">ДАВАЙТЕ ЗНАКОМИТЬСЯ!</div>
                </q-card-section>

                <q-card-section>
                  <q-form @submit.prevent="register(login, email, password)">
                    <q-input bg-color="white" standout outlined bottom-slots v-model="login" label="Логин">
                    </q-input>
                    <q-input bg-color="white" standout outlined bottom-slots v-model="email" label="Почта">
                    </q-input>
                    <q-input bg-color="white" standout outlined bottom-slots v-model="password" label="Пароль" type="password">
                    </q-input>
                    <div  class="row justify-between">
                        <q-btn 
                          style="opacity: 0.75;" color="grey-1" text-color="black" label="Уже есть аккаунт" 
                          :to="{ name: 'authentication'}"/>
                        <q-btn 
                          style="opacity: 0.75;" color="grey-1" text-color="black" label="Отправить"
                          type="submit" />
                    </div>
                  </q-form>
                </q-card-section>
        </q-card>
    </q-page>
  </template>
  
  <script>
  import { defineComponent } from 'vue'
  import { useQuasar } from 'quasar'
  import { mapActions, mapGetters } from "vuex";
  
  export default defineComponent({
    name: 'RegistrationCard',
    setup () {
      const $q = useQuasar()

      return {
        showSuccessRegNotification (message) {
        $q.notify({
          message: message,
          timeout: 2000
        })
      },
      }
    },
    data() {
      return {
        login: '',
        password: '',
        email: '',
        preloader: '',
      }
    },
    computed: {
      ...mapGetters(['GET_AUTH_TOKEN']),
    },
    methods: {
      ...mapActions(['SEND_A_USER_REGISTRATION_REQUEST_TO_THE_API', 'REDIRECT_TO_THE_PAGE']),

      enable_preloader() {
        this.preloader = true;
      },

      disable_preloader() {
        this.preloader = false;
      },

      async register(login, email, password) {


        this.enable_preloader()

        this.SEND_A_USER_REGISTRATION_REQUEST_TO_THE_API({ login: login, email: email, password: password })
          .then((result) => {
            // this.status_info = result;
            this.showSuccessRegNotification(result)
          })
          .catch((error) => {
            this.status_info = error;
          })
          .finally(() => {
            this.disable_preloader();
          })


      },
    },
    mounted() {
      if (this.GET_AUTH_TOKEN) {
        this.REDIRECT_TO_THE_PAGE('main');
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
  