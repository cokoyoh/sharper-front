<template>
    <div class="reset-password" id="reset-password">
        <div class="container">
            <div class="col-lg-6 col-md-6 col-lg-offset-3 col-md-offset-3">
                <form class="form-horizontal" @submit.prevent="onSubmit">
                    <fieldset>
                        <div class="form-group">
                            <h1>Reset Password</h1>
                        </div>
                        <div class="form-group">
                            <label class="control-label" for="focusedInput">New Password</label>
                            <input class="for-password form-control" id="focusedInput"
                                   name="password" type="password"
                                   placeholder="New password here..."
                                   v-model="password">
                        </div>
                        <div class="form-group">
                            <label class="control-label">New Password</label>
                            <input class="for-password form-control" id="confirm-password"
                                   name="confirmation" type="password"
                                   placeholder="Enter password again..."
                                   v-model="confirmation">
                        </div>
                        <div class="form-group">
                            <button class="btn btn-primary btn-lg btn-block">
                                Reset Password
                            </button>
                        </div>
                    </fieldset>
                </form>

            </div>
        </div>
    </div>
</template>

<script>
    import {reset_password_url} from "../../global/config";

    export default {
        data(){
            return {
                password: '',
                confirmation: '',
            }
        },
        methods: {
            onSubmit(){
                console.log("Handles password reset")
                var post_data = {
                    password: this.password,
                    confirmation: this.confirmation,
                    token: this.$route.params.token
                }

                this.$http.post(reset_password_url, post_data)
                    .then(response => {
                        console.log("Password Reset Success: ", response)
                        window.alert(response.body.data)
                        this.$router.push({ name: 'login'})
                    })
                    .catch(response => {
                        console.log("Failed: ", response)
                        window.alert(response.body.data)
                    })
            }
        }
    }
</script>

<style lang="sass">
    .reset-password
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