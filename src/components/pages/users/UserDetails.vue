<template>
    <div class="user-details" id="user-details">
        <div class="container">
            <img src="../../../images/default_avatar.png" alt="">
            <p><i class="fa fa-user-o" aria-hidden="true"></i> {{userStore.auth_user.name}} </p>
            <p><i class="fa fa-envelope-o" aria-hidden="true"></i> {{userStore.auth_user.email}} </p>
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
    .user-details img
        height: 150px
        width: 150px
        margin-left: 30px
        border-radius: 50%
</style>