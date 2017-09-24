<template>
    <div class="forgot-password" id="forgot-password">
        <div class="container">
           <div class="col-lg-6 col-md-6 col-lg-offset-3 col-md-offset-3">
               <form class="form-horizontal" @submit.prevent="onSubmit">
                   <fieldset>
                       <div class="form-group">
                           <h1>Forgot your password?</h1>
                       </div>
                       <div class="form-group">
                           <label class="control-label" for="focusedInput">Password Reset</label>
                           <input class="for-password form-control" id="focusedInput" name="email" type="text" placeholder="Enter your registered email here..." v-model="email">
                       </div>
                       <div class="form-group">
                           <button class="btn btn-primary btn-lg btn-block">
                               Send me reset password instructions
                           </button>
                       </div>
                   </fieldset>
               </form>

           </div>
        </div>
    </div>
</template>

<script>
    import {forgot_password_url} from "../../global/config";

    export default {
        data(){
            return {
                email: ''
            }
        },
        methods: {
            onSubmit(){
                console.log("Yes, send it to me please")
                var post_data = {
                    email: this.email,
                    url: 'http://localhost:8080'
                }
                this.$http.post(forgot_password_url,post_data)
                    .then(response => {
                        console.log('response', response)
                        window.alert(response.body.data)
                        this.$router.push('')
                    })
                    .catch(response => {
                        console.log('response failed', response)
                        window.alert(response.body.data)
                    })
            }
        }
    }
</script>

<style lang="sass">
    .forgot-password
        padding: 60px 0 60px

    .btn.btn-primary
        border-radius: 0
        height: 40px

    .for-password.form-control
        border-radius: 0
        height: 45px

    label
        font-size: 14px

</style>