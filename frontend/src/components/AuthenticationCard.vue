<template>
    <q-page class="flex flex-center">
        <q-card class="reg-card bg-primary text-white dinot-font q-pa-sm">
                <q-card-section style="opacity: 0.9;" class="q-pa-lg">
                    <div class="text-h5">ПРИВЕТ</div>
                    <div class="text-subtitle1">ПОЛОГИНИМСЯ?</div>
                </q-card-section>

                <q-card-section>
                  <q-form @submit.prevent="loginUser()">
                    <q-input bg-color="white" standout outlined bottom-slots v-model="username" label="Логин/почта">
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
  import { mapActions, mapGetters } from "vuex";
  
  export default defineComponent({
    name: 'AuthenticationCard',
    data() {
      return {
        username: '',
        password: '',
        remember_me: false,
      }
    },
    computed:{
      ...mapGetters({
        userAuthenticated: 'account/getUserAuthenticatedFlag',
      })
    },
    methods: {
      ...mapActions( {
        login: 'account/login',
      }),
      loginUser(){
        this.login({username: this.username, password: this.password})
      }
    },
    mounted(){
      console.log(this.userAuthenticated)
      console.log(this.$store)
      if (this.userAuthenticated){
        this.$router.push({ name: 'main' })
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

  