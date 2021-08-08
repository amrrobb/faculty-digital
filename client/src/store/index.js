import Vue from 'vue'
import Vuex from 'vuex'
import {axios} from '../apis'
import router from '../router'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    reports: [],
    expenses: [],
    isLoggedIn: false,
  },
  mutations: {
    LOGIN_STATUS (state, value) {
      state.isLoggedIn = value
    },
    FETCH_REPORTS (state, data) {
      state.reports = data
    },
    FETCH_EXPENSES (state, data) {
      state.expenses = data
    },
  },
  actions: {
    // ========== ERROR HANDLER ============
    errorHandler (context, err) {
      console.log(err);
      let { code, message } = err.response.data
      if (Array.isArray(message)) {
        message = message.join(', ')
      }
      Swal.fire(
        `Error (${code})`,
        `${message}`,
        'error'
      )
    },
    // ========== USER ============
    loginCheck ({ commit }, payload) {
      commit('LOGIN_STATUS', payload)
    },
    login: async ({ commit, dispatch }, payload) => {
      try {
        const {data} = await axios.post('/login', payload)
  
        localStorage.access_token = data.access_token
        localStorage.email = data.email

        Swal.fire(
          'Sign In Success!',
          `Welcome ${data.email}`,
          'success'
        )
      
        commit('LOGIN_STATUS', true)
        router.push({ path: '/' })
      }
      catch (err) {
        dispatch('errorHandler', err)
      }
    },
    logout ({ commit }, payload) {
      Swal.fire({
        title: 'Logout Confirmation',
        text: 'Do you want to logout?',
        showDenyButton: true,
        confirmButtonText: `Yes`,
        denyButtonText: `No`,
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.clear()
          Swal.fire(
            'You already signed out!'
          )
    
          commit('LOGIN_STATUS', false)
          router.push({ path: '/' })

        } 
      })
    },

    // ========== FETCH DATA ============
    fetchReports: async ({commit, dispatch}, payload) => {
      try {
        const {data} = await axios.get('/reports',{
          headers: {
            access_token: localStorage.access_token
          }
        })
        commit('FETCH_REPORTS', data)
      }
      catch(err) {
        dispatch('errorHandler', err)
      }
    },
    fetchExpenses: async ({commit, dispatch}, payload) => {
      try {
        const {data} = await axios.get('/reports/expenses',{
          headers: {
            access_token: localStorage.access_token
          }
        })
        commit('FETCH_EXPENSES', data)
      }
      catch(err) {
        dispatch('errorHandler', err)
      }
    }
  },
  modules: {
  }
})
