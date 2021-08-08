<template>
  <div id="app">

    <div id="nav" v-show="isLoggedIn"> 
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
        <SideBar />
    </div>
    <router-view/>
  </div>
</template>

<script>
import SideBar from './components/SideBar.vue'
import {mapState} from 'vuex'
export default {
  name: "App",
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


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
	background: #f8f8f8;
}

.board-chart {
  border-radius: 15px;
  box-shadow: 0px 2px 15px rgba(25, 25, 25, 0.27);
  margin:  25px 0;
	padding: 15px 20px;
  max-width: 100%;
  text-align: center;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #4256b9;
}
</style>
