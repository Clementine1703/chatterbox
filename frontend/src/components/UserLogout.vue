<template>
  <q-page class="flex flex-center">
    <p>...</p>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { mapActions } from 'vuex'


export default defineComponent({
  name: 'UserLogout',
  methods:{
    ...mapActions({
      logout: 'account/logout',
    })
  },
  mounted(){
    this.logout()
  }
})
</script>
