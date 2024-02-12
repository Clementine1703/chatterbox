import { createStore } from "vuex";
import { hasProperty, isDefined } from './helpers/index.js'
// import axios from "axios";
// import router from '../router';
// import cookie from 'vue-cookies';


export default createStore({
    state: {
        auth: {
            isAuthenticated: false,
            user: {
                username: null,
            },
            token: {
                access: null,
                refresh: null,
            },
            error: null,
        }
    },

    getters: {
        isUserAuthenticated: state => {state.auth.isAuthenticated},
        username: state => {state.auth.user.username},
        accessToken: state => {state.auth.token.access},
        refreshToken: state => {state.auth.token.refresh},
        authError: state => {state.auth.error},
    },
    mutations: {
        SET_IS_AUTHENTICATED: (state, isAuthenticated) => {
            state.isAuthenticated = isAuthenticated;
        },
        SET_USERNAME: (state, username) => {
            state.username = username;
        },
        SET_ACCESS_TOKEN: (state, accessToken) => {
            state.auth.token.access = accessToken;
        },
        SET_REFRESH_TOKEN: (state, refreshToken) => {
            state.auth.token.refresh = refreshToken;
        },
        SET_AUTH_ERROR: (state, error) => {
            state.auth.error = error;
        },
    },
    actions: {
        login: ({ commit }, payload) => {
            // Проверяем, что payload и payload.token существуют и не null
            if (isDefined(payload) && hasProperty(payload, 'token')) {
              const token = payload.token;
              // Проверяем, что access и refresh токены существуют и не null
              if (isDefined(token) && hasProperty(token, 'access') && hasProperty(token, 'refresh')) {
                commit('SET_ACCESS_TOKEN', token.access);
                commit('SET_REFRESH_TOKEN', token.refresh);
              } else {
                console.error('Один из токенов не существует в объекте payload.token');
              }
            } else {
              console.error('Объект payload не содержит свойство token');
            }
          }
    }
})
