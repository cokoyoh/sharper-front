<template>
    <div class="add-project" id="add-project">
        <div class="container">
            <div class="row">
                <div class="col-lg-2 col-md-2"></div>
                <div class="col-lg-8 col-md-8 ">
                    <form class="form-horizontal" @submit.prevent="onSubmitProject">
                        <fieldset>
                           <div class="row">
                               <div class="col-md-8 col-lg-8">
                                   <div class="form-group">
                                       <label class="control-label">Project Title</label>
                                       <input type="text" class="form-control" id="title" name="title"
                                              v-model="project.title"
                                              v-validate="'required'"
                                              placeholder="Title of the project...">
                                       <span v-show="errors.has('title')"
                                             class="help is-danger">{{ errors.first('title')}}</span>
                                   </div>
                               </div>
                               <div class="col-md-4 col-lg-4">
                                   <div class="form-group">
                                       <label class="control-label"> Project Owner </label>
                                       <select class="form-control" id="select">
                                           <option v-for="user in  adminStore.users_list">{{user.name}}</option>
                                       </select>
                                   </div>
                               </div>
                           </div>
                            <div class="form-group">
                                <label class="control-label">Project Duration</label>
                                <input type="number" class="form-control" id="duration" name="duration"
                                       v-model="project.duration"
                                       v-validate="'required|min_value:1'"
                                       placeholder="Project time in months...">
                                <span v-show="errors.has('duration')"
                                      class="help is-danger">{{ errors.first('duration')}}</span>
                            </div>
                            <div class="form-group">
                                <label class="control-label">Project Description</label>
                                <textarea  class="form-control"
                                           id="description" name="description"
                                           placeholder="Brief description of the project..."
                                           v-model="project.description"
                                           v-validate="'required'"
                                           rows="5">
                                      <span v-show="errors.has('description')"
                                            class="help is-danger">{{ errors.first('description')}}</span>
                                </textarea>
                            </div>
                            <div class="form-group">
                                <button class="btn btn-md btn-success">Add Project</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    import {add_project_url, get_header} from "../../../../global/config";

    export default {
        data() {
            return {
                project: {
                    title: '',
                    description: '',
                    duration: '',
                }
            }
        },
        methods: {
            onSubmitProject(){
                this.$validator.validateAll().then(() => {
                    const post_data = {
                        title: this.project.title,
                        description: this.project.description,
                        duration: this.project.duration
                    }
                    this.$http.post(add_project_url,post_data, {headers:get_header()})
                        .then(response => {
                            console.log(response.body)
                        })
                })
            }
        },
        computed: mapState({
            adminStore: state => state.adminStore
        }),
        created(){
            this.$store.dispatch('setUsersList')
        }
    }
</script>

<style lang="sass">
    .add-project
        padding: 40px 0 60px
        .is-danger
            color: red
            font-size: 14px
</style>