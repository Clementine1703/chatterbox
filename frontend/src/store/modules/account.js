import axios from "axios";
import { useCookies } from "vue3-cookies";

import { baseUrl } from "@/utils/config";
import router from "@/router";


export default {
    namespaced: true,
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
        },
    },
    getters: {
        getUserAuthenticatedFlag: (state) => state.auth.isAuthenticated,
        getUsername: state => state.auth.user.username,
        getAccessToken: state => state.auth.token.access,
        getRefreshToken: state => state.auth.token.refresh,
        getAuthError: state => state.auth.error,
    },
    mutations: {
        SET_IS_AUTHENTICATED_FLAG: (state, isAuthenticated) => {
            state.auth.isAuthenticated = isAuthenticated;
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
        CLEAR_AUTHENTICATION_DATA: (state) => {
            state.auth.isAuthenticated = false;
            state.auth.token.access = null;
            state.auth.token.refresh = null;
            state.auth.user.username = null;
        }
    },
    actions: {
        login({ commit, dispatch }, loginData) {
            axios.post(`${baseUrl}/auth/token/create/`, {
                username: loginData.username,
                password: loginData.password,
            })
            .then((response)=>{
                if (response.status === 200){
                    console.log(response)
                    const token = response.data;
                    commit('SET_ACCESS_TOKEN', token.access)
                    commit('SET_REFRESH_TOKEN', token.refresh)
                    dispatch('setAuthorizationCookies')
                    console.error(token)
                    router.push({ name: 'main' })
                    dispatch('notifications/callNotification', {
                        message: 'Вы успешно авторизованы!',
                        color: 'positive',
                        position: 'top-right',
                    }, {root: true})
                    commit('SET_IS_AUTHENTICATED_FLAG', true)


                }
            })
            .catch((error)=>{
                console.error(`Попытка авторизации окончилась ошибкой:' ${error}`)
                dispatch('notifications/callNotification', {message: 'Что-то пошло не так', color: 'negative'}, {root: true})
            })
        },
        logout({ commit, dispatch }){
            commit('CLEAR_AUTHENTICATION_DATA')
            router.push({ name: 'authentication' })
            dispatch('clearAuthorizationCookies')

        },

        authenticationCheck({ getters, dispatch }) {
            axios.post(`${baseUrl}/auth/token/verify/`, {
                token: getters.getAccessToken
            }, 
            {
                headers: {
                    Authorization: `Bearer ${getters.getAccessToken}`
                },
            })
            .then((response)=>{
                if (response.status === 200){
                    console.log(response)
                    dispatch('notifications/callNotification', {
                        message: 'Вы все еще авторизованы.',
                        color: 'positive',
                    }, {root: true})
                }
            })
            .catch((error)=>{
                dispatch('notifications/callNotification', {
                    message: 'Access token устарел, пробуем обновить.',
                    color: 'negative',
                }, {root: true})
                console.log(`access_token::: ${error}`)
                dispatch('refreshAccessToken')
            })
        },

        refreshAccessToken({ commit, getters, dispatch }) {
            axios.post(`${baseUrl}/auth/token/refresh/`, 
            { 
                refresh: getters.getRefreshToken 
            },
            {
                headers: {
                    Authorization: `Bearer ${getters.getAccessToken}`
                }
            })
            .then((response)=>{

                let access_token = response.data.access
                commit('SET_ACCESS_TOKEN', access_token)

                dispatch('notifications/callNotification', {
                    message: 'Access token успешно обновлен.',
                    color: 'positive',
                }, {root: true})

            })
            .catch((error)=>{
                dispatch('notifications/callNotification', {
                    message: 'Access token не обновлен, подробности в консоли.',
                    color: 'negative',
                }, {root: true})
                console.log(`refresh_token::: ${error}`)
                dispatch('logout')
            })
        },

        setAuthorizationCookies({ getters }) {
            const cookies = useCookies().cookies
            cookies.set('token_access', getters.getAccessToken)
            cookies.set('token_refresh', getters.getRefreshToken)
        },

        clearAuthorizationCookies() {
            const cookies = useCookies().cookies
            cookies.remove('token_access')
            cookies.remove('token_refresh')
        },



    
    }
}

