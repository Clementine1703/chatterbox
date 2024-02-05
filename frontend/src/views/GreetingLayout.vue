

<template>
    <q-layout view="hHh Lpr lff" class="main-layout">
            <q-page-container>
                <router-view></router-view>
            </q-page-container>
    </q-layout>
</template>

<script>
// import { ref } from 'vue'
import { defineComponent } from 'vue'




export default defineComponent ({
    name: "GreetingLayout",
    data() {
      return {
        login: '',
        password: '',
        email: '',
      }
    },
    mounted(){
        console.log(this)
    },

})
</script>

<style lang="scss" scoped>

.main-layout{
    width: 100%;
    height: 100vh;
    // font-family: ;
}

.auth-card{
    width: 450px;
    height: 450px;
}

</style>
