<template>
    <div class="header" id="header">
        <div class="container">
            <h2>Sharper Innovations</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <b>
                Donec luctus egestas massa vitae scelerisque. Quisque non velit tincidunt, blandit nisl at, rhoncus lorem.
            </b> <br> <br>
            <router-link to="/all-projects">
                <button class="btn-clear btn btn-lg btn-default">Explore Our Projects</button>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="sass">
    .header
        padding: 50px 0 60px
        height: 500px
        width: 100%
        text-align: center
        background-image: url("../../../images/background/pexels-photo.jpg")
        background-position: center
        background-repeat: no-repeat
        background-size: cover
        .btn-clear
            background-color: transparent !important
            color: #fff
            border: 2px solid #0099cc
    .header h2
        font-family: 'Noto Sans', sans-serif
        font-size: 50px
        color: #fff

    .header p
        font-family: 'Lato', sans-serif
        font-size: 30px
        text-align: center
        color: #fff
    .header b
        font-family: 'Lato', sans-serif
        text-align: center
        color: #fff

</style>