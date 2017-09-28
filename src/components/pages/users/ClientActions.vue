<template>
    <div class="client-actions" id="client-actions">
        <div class="container">
            <h4>My Projects</h4>
            <section v-for="project in projectsStore.user_projects">
               <div class="project" @click="getProject(project)">
                   <h4>Project Title</h4>
                   <p>{{project.title}}</p>
                   <h4>Description</h4>
                   <p>{{project.description}}</p>
                   <section>
                       <form class="form-horizontal" @submit.prevent="onSubmit">
                           <fieldset>
                               <div class="form-group has-success">
                                   <!--<label class="control-label" for="feedback">Add Feedback</label>-->
                                   <input type="text"
                                          class="form-control"
                                          placeholder="Type Feedback here..."
                                          v-model="feedback"
                                          v-validate="'required'"
                                          id="feedback" name="feedback">
                               </div>
                           </fieldset>
                       </form>
                   </section>
                   <hr>
                   <br>
               </div>
            </section>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import {add_user_feedback_url, get_header} from "../../../global/config";

    export default {
        data(){
          return{
              feedback: ''
          }
        },
        computed: mapState({
            projectsStore: state => state.projectsStore
        }),
        created() {
            this.$store.dispatch('setUserProjects')
        },
        methods: {
            getProject(project){
                this.$store.dispatch('setCurrentProject',project)
            },
            onSubmit(){
                let post_data = {
                    project_id: this.projectsStore.current_project.id,
                    feedback: this.feedback
                }
                console.log(post_data)
                this.$http.post(add_user_feedback_url, post_data, {headers:get_header()})
                    .then(response => {
                        console.log(response)
                        if(response.status === 200){
                            swal(
                                'Success',
                                response.body.message,
                                'success'
                            )
                            this.feedback = null
                        }
                    })
                    .catch(response => {
                        console.log(response)
                    })
            }
        }
    }
</script>

<style lang="sass">
    .client-action p
        font-family: 'Lato', sans-serif
</style>