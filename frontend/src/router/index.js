import { createRouter, createWebHistory } from 'vue-router'

import MainLayout from './../views/MainLayout.vue'
import GreetingLayout from './../views/GreetingLayout.vue'

import UserProfile from './../components/UserProfile.vue'
import UserNotifications from './../components/UserNotifications.vue'
import UserChats from './../components/UserChats.vue'
import UserChatActive from './../components/UserChatActive.vue'
import UserFriends from './../components/UserFriends.vue'
import UserCommunities from './../components/UserCommunities.vue'
import SiteSettings from './../components/SiteSettings.vue'
import FrequentlyAskedQuestions from './../components/FrequentlyAskedQuestions.vue'
import AuthenticationCard from './../components/AuthenticationCard.vue'
import RegistrationCard from './../components/RegistrationCard.vue'
import UserLogout from './../components/UserLogout.vue'



const routes = [
    {
      path: '/main',
      name: 'main',
      component: MainLayout,
      children: [
        { path: 'profile', name: 'profile', component: UserProfile },
        { path: 'notifications', name: 'notifications', component: UserNotifications },
        { path: 'chats', name: 'chats', component: UserChats },
        { path: 'chats/:id', name: 'messages', component: UserChatActive },
        { path: 'friends', name: 'friends', component: UserFriends },
        { path: 'communities', name: 'communities', component: UserCommunities },
        { path: 'settings', name: 'settings', component: SiteSettings },
        { path: 'faq', name: 'faq', component: FrequentlyAskedQuestions },
        { path: 'logout', name: 'logout', component: UserLogout },

      ]
    },
    {
      path: '/',
      name: 'greeting',
      component: GreetingLayout,
      children: [
        { path: 'auth', name: 'authentication', component: AuthenticationCard },
        { path: 'reg', name: 'registration', component: RegistrationCard },
        { path: '/', redirect: 'auth' },
      ]
    },
]

export default createRouter({
    history: createWebHistory(),
    routes
})