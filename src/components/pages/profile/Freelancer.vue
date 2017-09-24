<template>
    <div class="freelancer" id="freelancer">
        <div class="container">
            <h4 class="position-center">Sharper Innovations Projects</h4>

            <project-block></project-block>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import ProjectBlock from './ProjectsWidget.vue'
    export default {
        components: {
            'project-block': ProjectBlock
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
        padding: 80px 0 60px
    .freelancer h2
        font-family: 'Noto Sans', sans-serif
    .freelancer p, h4, b
        font-family: 'Lato', sans-serif
    .position-center
        text-align: center
</style>