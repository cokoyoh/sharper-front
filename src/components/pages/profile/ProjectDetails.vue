<template>
    <div class="project-details" id="project-details">
        <top></top>
        <div class="container">
            <h2>Project Details</h2>
             <section class="project-details">
                 <div class="row">
                     <div class="col-lg-2 col-md-2">
                         <img src="../../../images/project-profile/project_icon_2.png" alt="Project icon">
                     </div>
                     <div class="col-lg-8 col-md-8">
                         <h4>{{projectsStore.current_project.title}} </h4>
                         <div class="row">
                             <div class="col-lg-6 col-md-6">
                                 <p>Project Status: {{projectsStore.current_project.state.status}}</p>
                                 <p v-for="category in projectsStore.current_project.categories">Category: {{category.name}}</p>
                             </div>
                             <div class="col-lg-6 col-md-6">
                                 <p>Duration: {{projectsStore.current_project.duration}} Months</p>
                             </div>
                         </div>
                         <hr> <br>
                        <h4>Project Description</h4>
                         <p>{{projectsStore.current_project.description}}</p> <br>
                         <hr> <br>
                         <h4>Client Feedback</h4>
                         <p v-for="feedback in projectsStore.current_project.feedbacks">{{feedback.feedback}}</p>
                         <router-link to="/all-projects"> <div class="btn btn-sm btn-success pull-right"><i class="fa fa-arrow-left" aria-hidden="true"></i> Back</div></router-link>
                     </div>
                 </div>
             </section>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import projectStore from "./projectStore";
    import CredentialsTop from '../../auth/Credentials.vue'
    export default {
        components: {
            'top': CredentialsTop
        },
        computed: mapState({
            projectsStore: state => state.projectsStore
        })
    }
</script>

<style lang="sass">
    .project-details
        padding: 0 0 60px
    .project-details img
        height: 175px
        width: 175px
    .project-details h2
        font-family: 'Noto Sans', sans-serif
    .project-details h4, p, b
        font-family: 'Lato', sans-serif
</style>