<template>
  <q-page class="flex flex-center">
    <p>...</p>
  </q-page>
</template>

<script setup>
import { onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

function logout(){
  store.dispatch('account/logout')
}

onMounted(()=>{
  logout()
})
</script>
