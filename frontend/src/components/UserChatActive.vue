<template>
    <q-page class="flex active-chat">
      <div class=" active-chat__wrapper q-pa-md row ">
    <div style="width: 100%">
      <q-chat-message
        label="Sunday, 19th"
      />

      <q-chat-message
        name="me"
        avatar="https://cdn.quasar.dev/img/avatar4.jpg"
        :text="['hey, how are you?']"
        sent
        stamp="7 minutes ago"
      />
      <q-chat-message
        name="Jane"
        avatar="https://cdn.quasar.dev/img/avatar3.jpg"
        :text="['doing fine, how r you?']"
        stamp="4 minutes ago"
      />
    </div>
  </div>
    </q-page>
  </template>
  
  <!-- <script setup>
  </script> -->

<style scoped>
  .active-chat{
    width: 100%;
  }

  .active-chat__wrapper{
    width: 100%;
  }
</style>
  