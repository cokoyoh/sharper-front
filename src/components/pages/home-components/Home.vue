<template>
    <div class="home-page" id="home-page">
        <header-page></header-page>
        <snap></snap>
        <services></services>
        <about></about>
        <team></team>
    </div>
</template>

<script>
    import HeaderPage from './Header.vue'
    import Services from './Services.vue'
    import About from './About.vue'
    import Team from './Team.vue'
    import Snap from './SnapDetails.vue'

    export default {
        data() {
            return {}
        },
        components: {
            'header-page': HeaderPage,
            'services': Services,
            'about': About,
            'team': Team,
            'snap': Snap,
        }

    }
</script>

<style lang="sass">
    .home-page  h2
            font-family: 'Noto Sans', sans-serif

    .home-page  p, h4, b
            font-family: 'Lato', sans-serif
</style>