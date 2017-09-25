<template>
    <nav class="navbar navbar-expand-md navbar-dark static-top">
        <a class="navbar-brand" href="#">Sharper</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <router-link class="nav-link" to="/">Home <span class="sr-only">(current)</span></router-link>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#about">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " href="#team">Team</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Projects</a>
                    <div class="dropdown-menu" aria-labelledby="dropdown01">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link " href="#">Profile</a>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
               <router-link to="/register"> <button class="btn btn-outline-success my-2 my-sm-0 live-space" v-if="userStore.auth_user === null">Sign Up</button></router-link>
               <router-link to="/login"> <button class="btn btn-outline-success my-2 my-sm-0" v-if="userStore.auth_user === null">Login</button></router-link>
                <button class="btn btn-outline-success my-2 my-sm-0" @click="onLogout" type="submit" v-if="userStore.auth_user !== null">Logout</button>
            </form>
        </div>
    </nav>
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
    .navbar
        border-radius: 0 !important
    .navbar .navbar-dark .navbar-expand-md
        background: transparent !important
        margin-bottom: 0

    .navbar a
        color: #222222 !important
    .navbar .live-space
        margin-right: 10px
</style>