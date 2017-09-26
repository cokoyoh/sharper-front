<template>
    <div class="login" id="login">
        <div class="container">
          <div class="row">
              <div class="col-lg-3 col-md-3"></div>
              <div class="col-lg-6 col-md-6 ">
                  <form class="form-horizontal" @submit.prevent="onLogin">
                      <fieldset>
                          <div class="form-group">
                              <label class="control-label">Email</label>
                              <input type="email" class="form-control" id="email" name="email"
                                     v-model="login.email">
                              <!--<span v-show="errors.has('email')"-->
                              <!--class="help is-danger">{{ errors.first('email')}}</span>-->
                          </div>

                          <div class="form-group">
                              <label class="control-label">Password</label>
                              <input type="password" class="form-control" id="password" name="password"
                                     v-model="login.password">
                              <!--<span v-show="errors.has('password')"-->
                              <!--class="help is-danger">{{ errors.first('password')}}</span>-->
                          </div>

                          <div class="form-group">
                              <button class="btn-login btn btn-success" type="submit">Login</button>
                              <button class="btn btn-default pull-right"><router-link to="forgot-password">Forgot Password</router-link></button>
                          </div>

                      </fieldset>
                  </form>
              </div>
          </div>
        </div>
    </div>
</template>

<script>
    import {login_url, get_header, user_url} from "../../global/config";
    import {client_id, client_secret} from "../../global/env";
    import {mapState} from 'vuex'

    export default {
        data () {
            return {
                login: {
                    email: '',
                    password: '',
                }
            }
        },
        computed: mapState({
            userStore:state => state.userStore
        }),

        methods: {
            onLogin(){
                const post_data = {
                    client_id: client_id,
                    client_secret: client_secret,
                    grant_type: 'password',
                    username: this.login.email,
                    password: this.login.password,
                    scope:''
                }

                const auth_user = {}

                this.$http.post(login_url,post_data)
                    .then(response => {

                        if (response.status === 200) {
                            console.log('oauth token', response)
                            auth_user.access_token = response.body.access_token
                            auth_user.resfresh_token = response.body.resfresh_token
                            window.localStorage.setItem('auth_user',JSON.stringify(auth_user))
                            this.$http.get(user_url, {headers: get_header()})
                                .then(response => {
                                    console.log('user object', response)
                                    auth_user.email = response.body.email
                                    auth_user.name = response.body.name
                                    window.localStorage.setItem('auth_user',JSON.stringify(auth_user))
                                    this.$store.dispatch('setUserObject',auth_user)
                                    this.$router.push('dashboard')
                                })
                        }
                    })
            }
        }
    }
</script>

<style lang="sass">
    .login
        padding: 80px 0 60px
    .login .btn-default
        background: transparent !important
</style>