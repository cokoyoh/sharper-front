<template>
    <div class="container-fluid">
        <nav>
            <ul class="nav nav-pills float-right">
                <li class="nav-item">
                    <router-link class="nav-link" to="/">Home<span class="sr-only">(current)</span></router-link>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#about" v-if="this.$route.path === '/'">About</a>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/all-projects">Projects</router-link>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#team" v-if="this.$route.path === '/'">Team</a>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/contact-us">Contact Us</router-link>
                </li>
                <form class="form-inline my-2 my-lg-0">
                    <router-link to="/register"> <button class="btn btn-sm btn-outline-success my-2 my-sm-0 live-space" v-if="userStore.auth_user === null">Sign Up</button></router-link>
                    <router-link to="/login"> <button class="btn btn-sm btn-outline-success my-2 my-sm-0" v-if="userStore.auth_user === null">Login</button></router-link>
                    <button class="btn btn-sm btn-outline-success my-2 my-sm-0" @click="onLogout" type="submit" v-if="userStore.auth_user !== null">Logout</button>
                </form>
                <hr>
            </ul>
        </nav>
        <h3 class="text-muted">Sharper Innovations</h3>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        data(){
          return {
              requiresAuth: false,
          }
        },
        computed: mapState({
            userStore:state => state.userStore
        }),
        methods: {
            onLogout(){
                console.log("You are about to log out!")
                this.$store.dispatch('clearAuthUser')
                window.localStorage.removeItem('auth_user')
                this.$router.push('/')
            }
        }
    }
</script>

<style lang="sass">
    /*.navbar*/
        /*border-radius: 0 !important*/
    /*.navbar .navbar-dark .navbar-expand-md*/
        /*background: transparent !important*/
        /*margin-bottom: 0*/

    /*.navbar a*/
        /*color: #222222 !important*/
    /*.navbar .live-space*/
        /*margin-right: 10px*/
    .live-space
        margin-right: 10px
    nav
        padding: 10px 0 10px
        text-transform: uppercase
        .nav a, router-link
            color: #222222 !important
</style>