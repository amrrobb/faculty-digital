<template>
  <div class="home pt-5">
    <div v-show="!isLoggedIn">
      <h2>Welcome to this Dashboard App</h2>
      
      <div class="d-flex justify-content-center mt-5">
        <div>
            <img class="w-25" src="../assets/home.png" alt="" srcset="">
            
            <h4>Please login to continue</h4>
            <router-link :to="{name: 'Login'}">
              <button type="button" class="btn btn-outline-primary btn-lg">Login</button>
            </router-link>
        </div>
      </div>
    </div>

    <div v-show="isLoggedIn">
      <!-- <SideBar /> -->
      <h2>Welcome to this Dashboard App</h2>
      
      <div class="d-flex justify-content-center mt-5">
        <div>
            <img class="w-25" src="../assets/home.png" alt="" srcset="">
            
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import SideBar from '../components/SideBar.vue'
export default {
  name: 'Home',
  components: {
    SideBar
  },
  computed: {
    ...mapState(['isLoggedIn'])
  },
  created () {
    if (localStorage.access_token) {
      this.$store.dispatch('loginCheck', true)
    } 
    else {
      this.$store.dispatch('loginCheck', false)
    }
  }
}
</script>
