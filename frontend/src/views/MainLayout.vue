<template>
    <q-layout view="hHh Lpr lff" container class="main-layout shadow-2">
      <q-header elevated class="bg-primary">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
          <q-toolbar-title>Chatterbox</q-toolbar-title>
          <q-btn color="primary" label="Аккаунт" unelevated />
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        show-if-above
        :width="350"
        :breakpoint="500"
        bordered
        class="bg-white"
      >
        <q-scroll-area class="fit">
          <q-list>

            <template v-for="(menuItem, index) in menuList" :key="index">
                <q-item 
                clickable 
                v-ripple 
                class="drawer__item"
                :active="menuItem.routeName == activeMenuItemRouteName" 
                active-class="drawer__active-item text-black" 
                @click = "changeActiveMenuItem(menuItem)"
                :to="{ name: menuItem.routeName }">
                  <q-item-section avatar>
                    <q-icon :name="menuItem.icon" color="primary"/>
                  </q-item-section>
                  <q-item-section class="drawer__item-label">
                    {{ menuItem.label }}
                  </q-item-section>
                </q-item>
              <q-separator :key="'sep' + index"  v-if="menuItem.separator" />
            </template>

          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-page-container>
        <router-view></router-view>
      </q-page-container>
    </q-layout>
</template>

<script>
import { ref } from 'vue'
import { defineComponent } from 'vue'

const menuList = [
  {
    icon: 'account_circle',
    label: 'Профиль',
    routeName: 'profile',
    separator: true,
  },
  {
    icon: 'feedback',
    label: 'Уведомления',
    routeName: 'notifications',
    separator: false
  },
  {
    icon: 'send',
    label: 'Сообщения',
    routeName: 'chats',
    separator: false
  },
  {
    icon: 'group',
    label: 'Друзья',
    routeName: 'friends',
    separator: false
  },
  {
    icon: 'diversity_3',
    label: 'Сообщества',
    routeName: 'communities',
    separator: true
  },
  {
    icon: 'settings',
    label: 'Настройки',
    routeName: 'settings',
    separator: false
  },
  {
    icon: 'help',
    label: 'FAQ',
    routeName: 'faq',
    separator: true
  },
  {
    icon: 'meeting_room',
    label: 'Выйти',
    routeName: 'signout',
    separator: false
  },
]

export default defineComponent ({
    name: "MainLayout",
    data() {
      return {
        activeMenuItemRouteName: '',
      }
    },
    methods: {
      calculateActiveMenuItem(){
        this.activeMenuItemRouteName = this.$route.name
      },

      changeActiveMenuItem(menuItem){
        console.log(menuItem.routeName)
        this.activeMenuItemRouteName = menuItem.routeName
      }
    },
    mounted(){
      this.calculateActiveMenuItem()
      console.log('aboba')
    },
    setup() {
        return {
            drawer: ref(false),
            menuList
        };
    },
})
</script>

<style lang="scss" scoped>

.main-layout{
  height: 100vh;
}

.drawer__scroll-area{
  color: $primary;
  background-color: white;
}

.drawer__item{
  font-weight: 650;
  color: rgba(0, 0, 0, 0.507);
}

.drawer__item-label:active{
  color: $primary;
}


.header, .footer{
  background-color: $primary;
}
</style>
