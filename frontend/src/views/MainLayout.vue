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

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

let drawer = ref(false)
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
    routeName: 'logout',
    separator: false,
  },
]

let store = useStore()
let route = useRoute()
let activeMenuItemRouteName = ref('')
let userAuthenticated = computed(() => store.getters['account/getUserAuthenticatedFlag'])


function calculateActiveMenuItem(){
  activeMenuItemRouteName.value = route.name
}

function changeActiveMenuItem(menuItem){
  activeMenuItemRouteName.value = menuItem.routeName
}

function checkAuthorizationCookies(){
  // Проверка есть ли в куках токены.
  store.dispatch('account/getAuthorizationCookies')
  .then((result)=>{
    const token = result
    if (token.access != null) {
      store.commit('account/SET_ACCESS_TOKEN', {accessToken: token.access})
      store.commit('account/SET_REFRESH_TOKEN', {refreshToken: token.refresh})
      store.commit('account/SET_IS_AUTHENTICATED_FLAG', {isAuthenticated: true})
    }
    else {
      if (!userAuthenticated.value){
        store.dispatch('account/logout')
      }
    }
  })
}

onMounted(()=>{
  checkAuthorizationCookies()
  calculateActiveMenuItem()
})

</script>

<!-- <script>
import { ref } from 'vue'
import { defineComponent } from 'vue'
import { mapActions, mapGetters, mapMutations } from "vuex";

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
    routeName: 'logout',
    separator: false,
  },
]

export default defineComponent ({
    name: "MainLayout",
    data() {
      return {
        activeMenuItemRouteName: '',
      }
    },
    computed:{
      ...mapGetters({
        userAuthenticated: 'account/getUserAuthenticatedFlag',
      })
    },
    methods: {
      ...mapActions( {
        getAuthorizationCookies: 'account/getAuthorizationCookies',
        logout: 'account/logout'
      }),

      ...mapMutations({
        setAccessToken: 'account/SET_ACCESS_TOKEN',
        setRefreshToken: 'account/SET_REFRESH_TOKEN',
        setUserAuthenticatedFlag: 'account/SET_IS_AUTHENTICATED_FLAG',
      }),

      checkUserAuthorizated(){
        // Проверка есть ли в куках токены.
        this.getAuthorizationCookies().then((result)=>{
          const token = result
          if (token.access != null) {
            this.setAccessToken(token.access)
            this.setRefreshToken(token.refresh)
            this.setUserAuthenticatedFlag(true)
          }
          else {
            if (!this.userAuthenticated){
              this.logout()
            }
          }
        })
      },

      calculateActiveMenuItem(){
        this.activeMenuItemRouteName = this.$route.name
        console.log(this.userAuthenticated)
      },

      changeActiveMenuItem(menuItem){
        this.activeMenuItemRouteName = menuItem.routeName
      },
    },
    mounted(){
      this.calculateActiveMenuItem()
      this.checkUserAuthorizated()
    },
    setup() {
        return {
            drawer: ref(false),
            menuList
        };
    },
})
</script> -->

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
