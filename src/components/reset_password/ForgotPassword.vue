<template>
    <div class="forgot-password" id="forgot-password">
        <div class="container">
          <div class="row">
              <div class="col-lg-3 col-md-3"></div>
              <div class="col-lg-6 col-md-6">
                  <form class="form-horizontal" @submit.prevent="onSubmit">
                      <fieldset>
                          <div class="form-group">
                              <h1>Forgot your password?</h1>
                          </div>
                          <div class="form-group">
                              <label class="control-label" for="focusedInput">Password Reset</label>
                              <input class="for-password form-control"
                                     id="focusedInput" name="email" type="text"
                                     placeholder="xyz@gmail.com"
                                     v-validate="'required|email'"
                                     v-model="email">
                              <span v-show="errors.has('email')"
                                    class="help is-danger">{{ errors.first('email')}}</span>
                          </div>
                          <div class="form-group">
                              <button class="btn btn-success btn-md btn-block">
                                  Send me reset password instructions
                              </button>
                          </div>
                      </fieldset>
                  </form>

              </div>
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
                this.$validator.validateAll().then(() => {
                    var post_data = {
                        email: this.email,
                        url: 'http://localhost:8080'
                    }
                    this.$http.post(forgot_password_url,post_data)
                        .then(response => {
                            console.log('response', response)
                            if(response.status === 200){
                                swal(
                                    'Success',
                                    response.body.message,
                                    'success'
                                )
                                this.$router.push('')
                            }
                        })
                        .catch(response => {
                            console.log('response failed', response)
                            if(response.status === 403) {
                                swal(
                                    'Failed to send email',
                                    response.body.message,
                                    'error'
                                )
                            }
                        })
                })
            }
        }
    }
</script>

<style lang="sass">
    .forgot-password
        padding: 60px 0 60px
    .forgot-password .is-danger
        color: red
        font-size: 14px
    label
        font-size: 18px
        font-weight: 500

</style>