<template>
  <aside>

    <div class="hidden">
      <vs-sidebar
        absolute
        v-model="active"
        open
        >
        <template #logo >
            <div>
                <h3>Dashboard</h3>
                <p>{{email}}</p>
            </div>
        </template>
        <div>

        </div>
        <vs-sidebar-item id="home">
          <template #icon>
            <i class='bx bx-home'></i>
          </template>
          <router-link to="/" class="nav-link" >Home</router-link>
        </vs-sidebar-item>
        <vs-sidebar-item id="charts">
          <template #icon>
            <i class='bx bx-home'></i>
          </template>
          <router-link to="/charts" class="nav-link" >Charts</router-link>
        </vs-sidebar-item>
        <vs-sidebar-item id="chat">
          <template #icon>
            <i class='bx bx-chat' ></i>
          </template>
          <a class="nav-link" @click.prevent="logout">Sign Out</a>
        </vs-sidebar-item>
      </vs-sidebar>
    </div>
  </aside>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: "SideBar",
    data:() => ({
        active: null,
    }),  
    methods: {
        ...mapActions(['logout'])
    },
    computed: {
      email() {
        return localStorage.email
        }
    }
}
</script>

<style>
aside
{
    position:fixed;
    width: 25%;
    height: 100%;
    top: 0;
    left: 0;
}
</style>     