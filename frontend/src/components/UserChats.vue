<template>
  <q-page class="flex flex-center kaka">
    <div class="wrapper">
      <div class="chat-list">
        <div>
    <q-list bordered padding>
      <q-item>
        <q-item-section>
          <q-item-label>
            <q-input bottom-slots v-model="text" label="Найти чат" counter :dense="dense">
              <template v-slot:append>
                <q-icon name="search" />
              </template>

              <template v-slot:hint>
                Всего найдено
              </template>
            </q-input>
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-separator  />
      <q-item-label header>Список чатов</q-item-label>

      <q-item class="chat-list__item">
        <q-item-section top avatar class="">
          <q-avatar color="primary" text-color="white" icon="bluetooth" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Single line item</q-item-label>
          <q-item-label caption lines="2">Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>5 min ago</q-item-label>
        </q-item-section>
      </q-item>

      <q-separator inset="item" />
      

      <q-item class="chat-list__item">
        <q-item-section top avatar class="">
          <q-avatar color="primary" text-color="white" icon="bluetooth" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Single line item</q-item-label>
          <q-item-label caption lines="2">Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>5 min ago</q-item-label>
        </q-item-section>
      </q-item>

      <q-separator  inset="item" />


      <q-item class="chat-list__item">
        <q-item-section top avatar class="">
          <q-avatar color="primary" text-color="white" icon="bluetooth" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Single line item</q-item-label>
          <q-item-label caption lines="2">Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>5 min ago</q-item-label>
        </q-item-section>
      </q-item>

      <q-separator  inset="item" />


      <q-item class="chat-list__item">
        <q-item-section top avatar class="">
          <q-avatar color="primary" text-color="white" icon="bluetooth" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Single line item</q-item-label>
          <q-item-label caption lines="2">Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>5 min ago</q-item-label>
        </q-item-section>
      </q-item>

      <q-separator  inset="item" />


      <q-item class="chat-list__item">
        <q-item-section top avatar class="">
          <q-avatar color="primary" text-color="white" icon="bluetooth" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Single line item</q-item-label>
          <q-item-label caption lines="2">Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>5 min ago</q-item-label>
        </q-item-section>
      </q-item>

      <q-separator  inset="item" />


      <q-item class="chat-list__item">
        <q-item-section top avatar class="">
          <q-avatar color="primary" text-color="white" icon="bluetooth" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Single line item</q-item-label>
          <q-item-label caption lines="2">Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>5 min ago</q-item-label>
        </q-item-section>
      </q-item>

      <q-separator  inset="item" />


      <q-item class="chat-list__item">
        <q-item-section top avatar class="">
          <q-avatar color="primary" text-color="white" icon="bluetooth" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Single line item</q-item-label>
          <q-item-label caption lines="2">Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>5 min ago</q-item-label>
        </q-item-section>
      </q-item>

      <q-separator  inset="item" />


      <q-item class="chat-list__item">
        <q-item-section top avatar class="">
          <q-avatar color="primary" text-color="white" icon="bluetooth" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Single line item</q-item-label>
          <q-item-label caption lines="2">Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>5 min ago</q-item-label>
        </q-item-section>
      </q-item>

      <q-separator  inset="item" />

    </q-list>
  </div>
      </div>
      <div class="active-chat"></div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { mapActions } from 'vuex'
// import { AuthConfirmationError } from '@/errors';

export default defineComponent({
  name: 'UserChats',
  methods: {
    ...mapActions({
      authenticationCheck: 'account/authenticationCheck'
    })
  },
  mounted(){
    this.authenticationCheck()
  }
})
</script>

<style scoped lang="scss">
  .wrapper{
    display: flex;
    width: 100%;
    height: 100%;
    position: relative;
  }

  .chat-list{
    width: 30%;
    height: 800px;
    overflow-y: auto;
  }

  .active-chat{
    width: 70%;
    height: 800px;
    background-color: red;
  }
  
  .chat-list__item{
    cursor: pointer;
    padding: 20px 15px;
  }

  .chat-list__item:hover{
    background-color: red;
  }
</style>
