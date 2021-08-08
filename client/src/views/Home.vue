<template>
  <div class="home">
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
</template>

<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>
