<template>
    <q-page class="flex flex-center">
        <q-card class="reg-card bg-primary text-white dinot-font q-pa-sm">
                <q-card-section style="opacity: 0.9;" class="q-pa-lg">
                    <div class="text-h5">ПРИВЕТ</div>
                    <div class="text-subtitle1">ПОЛОГИНИМСЯ?</div>
                </q-card-section>

                <q-card-section>
                  <q-form>
                    <q-input bg-color="white" standout outlined bottom-slots v-model="login" label="Логин/почта">
                    </q-input>
                    <q-input bg-color="white" standout outlined bottom-slots v-model="password" label="Пароль" type="password">
                    </q-input>
                    <div  class="row justify-between">
                        <q-btn 
                          style="opacity: 0.75;" 
                          color="grey-1" 
                          text-color="black" 
                          label="Зарегистрироваться" 
                          :to="{ name: 'registration'}" />
                        <q-btn 
                          style="opacity: 0.75;" 
                          color="grey-1" 
                          text-color="black" 
                          label="Войти"
                          type="submit" />
                    </div>
                  </q-form>
                </q-card-section>
        </q-card>
    </q-page>
</template>
  
  <script>
  import { defineComponent } from 'vue'
  // import { mapActions, mapGetters } from "vuex";
  
  export default defineComponent({
    name: 'AuthenticationCard',
    data() {
      return {
        form:{
          login: '',
          password: '',
          remember_me: false,
        },
        preloader: false,
      }
    },
  })
  </script>

<style scoped lang="scss">
.reg-card{
width: 450px;
height: 450px;
}

</style>

  