<template>
    <div class="register" id="register">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3">
                    <form class="form-horizontal" @submit.prevent="onSubmit">
                        <fieldset>
                            <div class="form-group">
                                <label class="control-label">Name</label>
                                <input type="text" class="form-control" id="name" name="name"
                                       v-model="new_user.name"
                                       placeholder="Your name here...">
                                <!--<span v-show="errors.has('email')"-->
                                <!--class="help is-danger">{{ errors.first('email')}}</span>-->
                            </div>
                            <div class="form-group">
                                <label class="control-label">Email</label>
                                <input type="email" class="form-control" id="email" name="email"
                                       v-model="new_user.email"
                                        placeholder="xyz@gmail.com">
                                <!--<span v-show="errors.has('email')"-->
                                <!--class="help is-danger">{{ errors.first('email')}}</span>-->
                            </div>

                            <div class="form-group">
                                <label class="control-label">Password</label>
                                <input type="password" class="form-control" id="password" name="password"
                                       v-model="new_user.password">
                                <!--<span v-show="errors.has('password')"-->
                                <!--class="help is-danger">{{ errors.first('password')}}</span>-->
                            </div>

                            <div class="form-group">
                                <label class="control-label">Confirm Password</label>
                                <input type="password" class="form-control" id="confirm_password" name="confirm_password"
                                       v-model="new_user.confirm_password">
                                <!--<span v-show="errors.has('password')"-->
                                <!--class="help is-danger">{{ errors.first('password')}}</span>-->
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
    export default {
        data() {
            return {
                new_user: {
                    name: '',
                    email: '',
                    password: '',
                    confirm_password: '',
                }
            }
        }
    }
</script>

<style lang="sass">
    .register
        padding: 40px 0 60px
</style>