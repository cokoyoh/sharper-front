<template>
    <div class="profile" id="profile">
        <div class="container">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus egestas massa vitae scelerisque. Quisque non velit tincidunt, blandit nisl at, rhoncus lorem. Phasellus tincidunt mollis lobortis. Maecenas tempus cursus arcu ut tristique. Duis sit amet ipsum ut mi sollicitudin pretium nec a nibh. Cras luctus luctus dictum.
            </p>
           <router-link to="freelancer"> <button class="btn btn-lg btn-default">Browse Our Freelancer Profile</button></router-link>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="sass">
    .profile
        padding: 60px 0 60px
        text-align: center
        /*background-color: #222222*/
        color: #222222
        background-image: url("../../../images/background/profile-link.png")
        background-size: cover
        background-position: center
        background-repeat: no-repeat
</style>