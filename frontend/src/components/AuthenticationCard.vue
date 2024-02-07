<template>
    <q-page class="flex flex-center">
        <q-card class="reg-card bg-primary text-white dinot-font q-pa-sm">
                <q-card-section style="opacity: 0.9;" class="q-pa-lg">
                    <div class="text-h5">ПРИВЕТ</div>
                    <div class="text-subtitle1">ПОЛОГИНИМСЯ?</div>
                </q-card-section>

                <q-card-section>
                    <q-input bg-color="white" standout outlined bottom-slots v-model="login" label="Логин/почта">
                    </q-input>
                    <q-input bg-color="white" standout outlined bottom-slots v-model="password" label="Пароль" type="password">
                    </q-input>
                    <div  class="row justify-between">
                        <q-btn style="opacity: 0.75;" color="grey-1" text-color="black" label="Зарегистрироваться" :to="{ name: 'registration'}" />
                        <q-btn style="opacity: 0.75;" color="grey-1" text-color="black" label="Войти" />
                    </div>
                </q-card-section>
        </q-card>
    </q-page>
</template>
  
  <script>
  import { defineComponent } from 'vue'
  import { mapActions, mapGetters } from "vuex";
  
  export default defineComponent({
    name: 'AuthenticationCard',
    data() {
      return {
        login: '',
        password: '',
        remember_me: false,
        status_info: '',
        preloader: false,
      }
    },
    computed: {
      ...mapGetters(['GET_AUTH_TOKEN']),
    },
    methods: {
      ...mapActions(['AUTHORIZE_THE_USER', 'REDIRECT_TO_THE_PAGE', 'GET_USER_AUTHORIZATION_DATA_FROM_COOKIES', 'SET_WEBSOCKET_INDICATOR']),
      
      async sign_in(login, password, remember_me) {
        this.enable_preloader()
        this.AUTHORIZE_THE_USER({ email: login, password: password, remember_me: remember_me }).then((result) => {
          this.password = '';
          this.status_info = result;
        })
          .catch((error) => {
            this.status_info = error;
          })
          .finally(() => {
            this.disable_preloader()
          })
      },
    },

    mounted() {
      if (this.GET_AUTH_TOKEN) {
        this.REDIRECT_TO_THE_PAGE('main')
      }
      try {
        this.email, this.password = this.GET_USER_AUTHORIZATION_DATA_FROM_COOKIES();
      }
      catch {
        return 0;
      }
    }
  })
  </script>

<style scoped lang="scss">
.reg-card{
width: 450px;
height: 450px;
}

</style>

  