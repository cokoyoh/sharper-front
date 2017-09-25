<template>
    <div class="add-project" id="add-project">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6 ">
                    <form class="form-horizontal" @submit.prevent="onSubmitProject">
                        <fieldset>
                            <div class="form-group">
                                <label class="control-label">Project Title</label>
                                <input type="text" class="form-control" id="title" name="title"
                                       v-model="project.title"
                                       v-validate="'required'"
                                       placeholder="Title of the project...">
                                <span v-show="errors.has('title')"
                                      class="help is-danger">{{ errors.first('title')}}</span>
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
    import {add_project_url} from "../../../../global/config";

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
                 const post_data = {
                     title: this.project.title,
                     description: this.project.description,
                     duration: this.project.duration
                 }
                 this.$http.post(add_project_url,post_data)
                     .then(response => {
                         console.log(response.body)
                     })
            }
        }
    }
</script>

<style lang="sass">
    .add-project
        padding: 80px 0 60px
</style>