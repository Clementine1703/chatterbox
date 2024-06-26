import axios from "axios";

import { baseUrl } from "@/utils/config";
import router from "@/router";

import cookies from "@/plugins/cookies"


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
                    const token = response.data;
                    commit('SET_ACCESS_TOKEN', token.access)
                    commit('SET_REFRESH_TOKEN', token.refresh)
                    dispatch('setAuthorizationCookies')
                    dispatch('getAuthorizationCookies')
                    router.push({ name: 'main' })
                    dispatch('notifications/callNotification', {
                        message: 'Вы успешно авторизованы!',
                        color: 'positive',
                        position: 'top-right',
                    }, {root: true})
                    commit('SET_IS_AUTHENTICATED_FLAG', true)
                }
            })
        },

        logout({ commit, dispatch }){
            commit('CLEAR_AUTHENTICATION_DATA')
            router.push({ name: 'authentication' })
            dispatch('clearAuthorizationCookies')
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
                    message: 'Токен доступа успешно обновлен.',
                    color: 'positive',
                }, {root: true})

            })
            .catch((error)=>{
                console.log(`refresh_token::: ${error}`)
                dispatch('logout')
            })
        },


        setAuthorizationCookies({ getters }) {
            cookies.set('token_access', getters.getAccessToken)
            cookies.set('token_refresh', getters.getRefreshToken)
        },

        clearAuthorizationCookies() {
            cookies.remove('token_access')
            cookies.remove('token_refresh')
        },

        getAuthorizationCookies() {
            const token = {
                access: cookies.get('token_access'),
                refresh: cookies.get('token_refresh')
            }
            console.error(cookies.get('token_access'))
            return token
        },


    
    }
}

