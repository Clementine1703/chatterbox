import { createStore } from "vuex";
import axios from "axios";
import router from "@/router";
import { Notify } from 'quasar';



export default createStore({
    state: {
        base_url: 'http://127.0.0.1:8000',
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
        },
        router: router,
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
        login: ({ commit, state, dispatch  }, loginData) => {
                axios.post(`${state.base_url}/auth/token/create/`, {
                    username: loginData.username,
                    password: loginData.password,
                })
                .then((response)=>{
                    if (response.status === 200){
                        console.log(response)
                        // Проверяем, что payload и payload.token существуют и не null
                        const token = response.data;
                        // Проверяем, что access и refresh токены существуют и не null
                        commit('SET_ACCESS_TOKEN', token.access);
                        commit('SET_REFRESH_TOKEN', token.refresh);
                        state.router.push({ name: 'main' })
                        dispatch('showNotification', {message: 'Вы успешно авторизованы!', color: 'positive'})
                    }
                })
                .catch((error)=>{
                    console.error(`Попытка авторизации окончилась ошибкой:' ${error}`)
                    dispatch('showNotification',{message: 'Что-то пошло не так', color: 'negative'})
                })
        },

        // eslint-disable-next-line
        showNotification({}, {message, color}){
            

            Notify.create({
                message,
                color,
                position: 'bottom',
                actions: [{ icon: 'close', color: 'white', round: true}]
            });
        }
    }
})
