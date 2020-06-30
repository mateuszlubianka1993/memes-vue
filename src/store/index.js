import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios-auth';
import globalAxios from 'axios';
import router from '../router/index';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        idToken: null,
        userId: null,
        user: null,
        memes: []
    },
    mutations: {
        auth(state, data) {
            state.idToken = data.token
            state.userId = data.userId
        },
        storeUser(state, user) {
            state.user = user.data
        },
        clearAuth(state) {
            state.userId = null
            state.idToken = null
        },
        fillMemes(state, data) {
            state.memes = data
        }
    },
    actions: {
        getMemes({ commit }) {

            globalAxios.get(`memes.json`)
                .then(res => {
                    commit("fillMemes", res.data)
                })
                .catch(err => console.log(err))
        },
        autoLogOut({ commit }, expTime) {
            setTimeout(() => {
                commit('clearAuth')
            }, expTime * 1000)
        },
        autoLogIn({ commit }) {
            const token = localStorage.getItem('token');
            if (!token) {
                return
            }
            const now = new Date()
            const expDate = localStorage.getItem('expDate');
            if (now >= expDate) {
                return
            }
            const userId = localStorage.getItem('userId');
            commit('auth', {
                token: token,
                userId: userId
            })
        },
        signUp({ commit, dispatch }, payload) {

            axios.post('accounts:signUp?key=AIzaSyBMQfXCjny4y2CClfe-1wR4Z6os7Kw6iRk', {
                    email: payload.email,
                    password: payload.password,
                    returnSecureToken: true
                })
                .then(res => {
                    commit('auth', {
                        token: res.data.idToken,
                        userId: res.data.localId
                    })

                    const now = new Date();
                    const expDate = new Date(now.getTime() + res.data.expiresIn * 1000);
                    localStorage.setItem('token', res.data.idToken);
                    localStorage.setItem('userId', res.data.localId);
                    localStorage.setItem('expDate', expDate);


                    dispatch('setUser', payload);
                    router.replace('/');
                    dispatch('autoLogOut', res.data.expiresIn);
                })
                .catch(err => console.log(err))
        },
        signIn({ commit, dispatch }, payload) {

            axios.post('accounts:signInWithPassword?key=AIzaSyBMQfXCjny4y2CClfe-1wR4Z6os7Kw6iRk', {
                    email: payload.email,
                    password: payload.password,
                    returnSecureToken: true
                })
                .then(res => {
                    commit('auth', {
                        token: res.data.idToken,
                        userId: res.data.localId
                    })

                    const now = new Date();
                    const expDate = new Date(now.getTime() + res.data.expiresIn * 1000);
                    localStorage.setItem('token', res.data.idToken);
                    localStorage.setItem('userId', res.data.localId);
                    localStorage.setItem('expDate', expDate);

                    router.replace('/');
                    dispatch('autoLogOut', res.data.expiresIn);
                })
                .catch(err => console.log(err))
        },
        setUser({ state }, user) {
            if (!state.idToken) {
                return
            }

            const userData = {
                nick: user.nick,
                // country: user.country,
                email: user.email,
                // hobbies: user.hobbies
            }

            globalAxios.put(`users/${state.userId}.json?auth=${state.idToken}`, userData)
                .then(res => console.log(res))
                .catch(err => console.log(err))
        },
        getUser({ commit, state }) {
            if (!state.idToken) {
                return
            }

            globalAxios.get(`users/${state.userId}.json?auth=${state.idToken}`)
                .then(res => {
                    commit("storeUser", res)
                })
                .catch(err => console.log(err))
        },
        signOut({ commit }) {
            commit("clearAuth");
            router.replace('/signin');

            localStorage.removeItem('token');
            localStorage.removeItem('userId');
            localStorage.removeItem('expDate');
        },
        setMeme({ state, dispatch }, meme) {
            if (!state.idToken) {
                return
            }

            globalAxios.put(`memes/${meme.title}.json?auth=${state.idToken}`, meme)
                .then(res => {
                    console.log(res)
                    dispatch('getMemes');
                })
                .then(() => {
                    router.replace('/')
                })
                .catch(err => console.log(err))
        }
    },
    getters: {
        user(state) {
            return state.user
        },
        isAuth(state) {
            return state.idToken !== null
        },
        memesList(state) {
            return state.memes
        }
    },
    modules: {}
})