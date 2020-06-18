import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios-auth';
import globalAxios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        idToken: null,
        userId: null,
        user: null
    },
    mutations: {
        auth(state, data) {
            state.idToken = data.token
            state.userId = data.userId
        },
        storeUser(state, user) {
            state.user = user
        }
    },
    actions: {
        signUp({ commit, dispatch }, payload) {

            axios.post('accounts:signUp?key=AIzaSyBMQfXCjny4y2CClfe-1wR4Z6os7Kw6iRk', {
                    email: payload.email,
                    password: payload.password,
                    returnSecureToken: true
                })
                .then(res => {
                    console.log(res);
                    commit('auth', {
                        token: res.data.idToken,
                        userId: res.data.localId
                    })
                    dispatch('setUser', payload)
                })
                .catch(err => console.log(err))
        },
        signIn({ commit }, payload) {

            axios.post('accounts:signInWithPassword?key=AIzaSyBMQfXCjny4y2CClfe-1wR4Z6os7Kw6iRk', {
                    email: payload.email,
                    password: payload.password,
                    returnSecureToken: true
                })
                .then(res => {
                    console.log(res);
                    commit('auth', {
                        token: res.data.idToken,
                        userId: res.data.localId
                    })
                })
                .catch(err => console.log(err))
        },
        setUser({ state }, user) {
            if (!state.idToken) {
                return
            }

            globalAxios.post('/users.json' + '?auth=' + state.idToken, user)
                .then(res => console.log(res))
                .catch(err => console.log(err))
        },
        getUser({ commit, state }) {
            if (!state.idToken) {
                return
            }

            globalAxios.get('/users.json' + '?auth=' + state.idToken)
                .then(res => {
                    console.log(res);
                    const data = res.data;
                    const users = [];
                    for (let key in data) {
                        const user = data[key];
                        user.id = key;
                        users.push(user);
                    }
                    console.log(users);
                    commit('storeUser', users[0]);
                })
                .catch(err => console.log(err))
        }
    },
    getters: {
        user(state) {
            return state.user
        }
    },
    modules: {}
})