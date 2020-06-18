import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios-auth';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        idToken: null,
        userId: null
    },
    mutations: {
        auth(state, data) {
            state.idToken = data.token
            state.userId = data.userId
        }
    },
    actions: {
        signUp({ commit }, payload) {

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
        }
    },
    modules: {}
})