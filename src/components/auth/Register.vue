<template>
    <div class="register" id="register">
        <top></top>
        <div class="container">
            <div class="row">
               <div class="col-lg-3 col-md-3"></div>
                <div class="col-lg-6  col-md-6 ">
                    <form class="form-horizontal" @submit.prevent="onSubmit">
                        <fieldset>
                            <div class="form-group">
                                <label class="control-label">Name</label>
                                <input type="text" class="form-control"
                                       id="name" name="name"
                                       v-model="new_user.name"
                                       v-validate="'required'"
                                       placeholder="Your name here...">
                                <span v-show="errors.has('name')"
                                      class="help is-danger">{{ errors.first('name')}}</span>
                            </div>
                            <div class="form-group">
                                <label class="control-label">Email</label>
                                <input type="email" class="form-control" id="email" name="email"
                                       v-model="new_user.email"
                                       v-validate="'required|email'"
                                       placeholder="xyz@gmail.com">
                                <span v-show="errors.has('email')"
                                      class="help is-danger">{{ errors.first('email')}}</span>
                            </div>

                            <div class="form-group">
                                <label class="control-label">Password</label>
                                <input type="password" class="form-control" id="password" name="password"
                                       v-validate="'required|min:6'"
                                       v-model="new_user.password">
                                <span v-show="errors.has('password')"
                                      class="help is-danger">{{ errors.first('password')}}</span>
                            </div>

                            <div class="form-group">
                                <label class="control-label">Confirm Password</label>
                                <input type="password" class="form-control" id="confirm_password" name="confirmation"
                                       data-vv-as="password"
                                       v-validate="'required|confirmed:password'"
                                       v-model="new_user.confirmation">
                                <span v-show="errors.has('confirmation')"
                                      class="help is-danger">{{ errors.first('confirmation')}}</span>
                            </div>

                            <div class="form-group">
                                <button class="btn btn-success" type="submit">Register</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {create_user_url} from "../../global/config";
    import CredentialsTop from './Credentials.vue'
    export default {
        components: {
            'top': CredentialsTop
        },
        data() {
            return {
                new_user: {
                    name: '',
                    email: '',
                    password: '',
                    confirm_password: '',
                }
            }
        },
        methods: {
            onSubmit(){
                this.$validator.validateAll().then(() => {
                    let post_data = this.new_user
                    this.$http.post(create_user_url,post_data)
                        .then(response => {
                            console.log(response)
                            if(response.status === 200){
                                swal(
                                    'Success',
                                     response.body.message + ' Please log in',
                                    'success'
                                )
                                this.$router.push('login')
                            }
                        })
                        .catch(response => {
                            console.log(response.body.errors.email)
                            swal(
                                response.body.message,
                                response.body.errors.email[0] + '. Please use another',
                                'error'
                               )
                        })
                })
            }
        }
    }
</script>

<style lang="sass">
    .register
        padding: 0 0 60px
    .is-danger
        color: red
        font-size: 14px
    .register h2
        font-family: 'Noto Sans', sans-serif
    .register p,h4,b, label
        font-family: 'Lato', sans-serif
        font-size: 18px
        font-weight: 500
</style>