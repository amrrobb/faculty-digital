<template>
    <section id="login-page">
    <!-- Navbar-->
    <div class="container-fluid position-relative p-0 mt-5">
        <div class="d-flex justify-content-center">
            <!-- The image half -->
            <div class="col-7 p-0 m-0 w-50">
                <img class="w-75" src="../assets/login.png" alt="">
            </div>

            <!-- The content half -->
            <div class="col-5 bg-light shadow" style="width: 40%; height: 60%;">
                <div class="d-flex align-items-center py-5">

                    <!-- Demo content-->
                    <div class="container h-auto">
                        <div class="row">
                            <div class="col-lg-10 col-xl-7 mx-auto mt-5">
                                <h6 class="h2">Dashboard</h6>
                                <p class="text-muted h5 my-3">Login</p>
                                <div style="margin-top: 7%;">
                                    <form @submit.prevent="login"> 
                                        <div class="form-group mb-3">
                                            <input type="email" placeholder="Email address" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" v-model="email">
                                        </div>
                                        <div class="form-group mb-3">
                                            <input type="password" placeholder="Password" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-dark" v-model="password">
                                        </div>

                                        <button type="submit" class="btn btn-primary btn-block mb-2 rounded-pill shadow-sm form-control">Login</button>

                                        <div class="text-center mt-4" >
                                            <p>Return to Home Page?
                                                <router-link class="font-italic text-muted" :to="{name: 'Home'}" >Home </router-link>
                                            </p>
                                        </div>

                                    </form>

                                </div>
                            </div>
                        </div>
                    </div><!-- End -->

                </div>
            </div><!-- End -->

        </div>
    </div>
    </section>
</template>

<script>
// import { mapActions } from 'vuex'
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    login () {
      const payload = {
        email: this.email,
        password: this.password
      }

      this.$store.dispatch('login', payload)
    },
  }
}
</script>

<style>

</style>
