<template>
    <div class="edit-status">
        <div class="container">
            <h4>Edit status here</h4>
            <table class="table table-striped table-hover " >
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Category</th>
                    <th>State</th>
                    <th>Edit</th>
                </tr>
                </thead>
                <tbody>
                   <tr v-for="project in projectsStore.projects_list">
                       <th>{{project.title}}</th>
                       <th></th>
                       <th>{{project.state.status}}</th>
                       <th><i class="fa fa-pencil-square-o" aria-hidden="true"></i></th>
                   </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        computed: mapState({
            projectsStore:state => state.projectsStore
        }),
        created(){
            this.$store.dispatch('setProjectsList')
        }
    }
</script>

<style lang="sass">
    .edit-status
        padding: 30px 0 30px
        /*height: 400px*/
    .edit-status  h2
        font-family: 'Noto Sans', sans-serif

    .edit-status  p, h4, b
        font-family: 'Lato', sans-serif
        /*color: #222222*/
        text-align: left
    .edit-status i
        color: midnightblue
</style>