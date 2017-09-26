<template>
    <div class="freelancer" id="freelancer">
        <projects-top></projects-top>
        <div class="container">
            <project-block></project-block>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import ProjectBlock from './ProjectsWidget.vue'
    import ProjectsTop from './ProjectsTop.vue'
    export default {
        components: {
            'project-block': ProjectBlock,
            'projects-top': ProjectsTop
        },
        computed: mapState({
            productsStore:state => state.productsStore
        }),
        created(){
            this.$store.dispatch('setProjectsList')
        }
    }
</script>

<style lang="sass">
    .freelancer
        padding: 0 0 60px
    .freelancer h2
        font-family: 'Noto Sans', sans-serif
    .freelancer p, h4, b
        font-family: 'Lato', sans-serif
    .position-center
        text-align: center
</style>