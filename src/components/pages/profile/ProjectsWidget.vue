<template>
    <div class="projects-widget">
        <div class="projects"
             @click="getProject(project)"
             v-for="project in projectsStore.projects_list">
            <div class="project-data clearfix">
                <div class="row">
                    <div class="col-lg-2 col-md-2">
                        <img src="../../../images/project-profile/project-icon.png" alt="">
                    </div>
                    <div class="col-lg-10 col-md-10">
                        <div class="title"><h4><b>Project Title: {{ project.title }}</b></h4></div>
                        <div class="description"><p><b>Description</b></p></div>
                        <div class="description"><p>{{ project.description }}</p></div>
                        <hr> <br>
                        <div class="row">
                            <div class="col-lg-4 col-md-4">
                                <b>Status: {{project.state.status}}</b>
                                <!--<b v-for="state in project.state">Status: {{state.state}}</b>-->
                            </div>
                            <div class="col-lg-4 col-md-4">
                                <b>Duration: {{ project.duration }} Months</b>
                            </div>
                            <div class="col-lg-4 col-md-4">
                                <router-link
                                        :to="'/project-details/' + project.id + '/show'"
                                        class="btn btn-sm btn-success">
                                    View Details
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <hr>
                </div>
                <br>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        props: ['current_project'],
        data() {
            return {

            }
        },
        computed: mapState({
            projectsStore: state => state.projectsStore
        }),

        methods: {
            getProject(project){
                this.$store.dispatch('setCurrentProject',project)
            }
        }
//        methods: {
//            getProject(){
//                return this.$http.post(get_project_details_url + this.$route.params.project)
//                    .then(response => {
//                        this.project = response.body
//                        console.log('Project Details',response.body)
//                        console.log(this.$route.params.project)
//                    })
//            }
//        }
    }
</script>

<style lang="sass">
    .projects-widget
        .project-data
            margin: 40px

</style>