<template>
    <div class="user-details" id="user-details">
        <div class="container-fluid">
            <h2>User Details</h2> <br>
            <h4>User name: {{userStore.auth_user.name}} </h4>
            <h4>Email: {{userStore.auth_user.email}} </h4>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import userStore from "./userStore";
    export default {
        computed: mapState({
            userStore:state => state.userStore
        }),
    }
</script>

<style lang="sass">
    .user-details p, h4, b
        font-family: 'Lato', sans-serif

</style>