<template>
    <div class="class">
        <div class="container">
            <h2> Project Details will be displayed here</h2>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        computed: mapState({
            projectsStore: state => state.projectsStore
        }),
    }
</script>

<style>

</style>