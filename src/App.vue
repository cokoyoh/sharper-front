<template>
    <div id="app">
        <navbar></navbar>
        <router-view></router-view>
        <sharper-footer></sharper-footer>
    </div>
</template>

<script>
    import Navbar from './components/Navbar.vue'
    import SharperFooter from './components/pages/Footer.vue'
    import {mapState} from 'vuex'

    export default {
        data() {
            return {}
        },
        computed: mapState({
            userStore: state => state.userStore
        }),

        created() {
            console.log("Global stuff here!")
            console.log("Param value", this.$route.params)
            const user_object = JSON.parse(window.localStorage.getItem('auth_user'))
            this.$store.dispatch('setUserObject', user_object)
        },
        components: {
            'navbar': Navbar,
            'sharper-footer': SharperFooter
        }
    }
</script>

<style lang="sass">

</style>
