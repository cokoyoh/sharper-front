<template>
  <div class="dashboard" id="dashboard">
      <div class="container-fluid">
        <div class="row">
            <div class="col-lg-3 col-md-2">
                <div class="panel panel-default">
                    <div class="panel-heading"><h2>Admin Details</h2></div>
                    <div class="panel-body">
                        Panel content
                    </div>
                </div>
            </div>
            <div class="col-lg-9 col-md-10">
                <div class="panel panel-default">
                    <div class="panel-heading"><h2>Dashboard</h2></div>
                    <div class="alert alert-dismissible alert-success">
                        <button type="button" class="close" data-dismiss="alert">&times;</button>
                        <strong>Welcome</strong>  admin
                    </div>
                    <div class="panel-body">
                        <table class="table table-hover ">
                            <thead>
                            <tr>
                                <th></th>
                                <th>
                                    <div class="panel-inner panel panel-default">
                                        <div class="panel-body">
                                            <div class="row">
                                                <div class="col-lg-2 col-md-2">
                                                    <i class="fa fa-users" aria-hidden="true"></i>
                                                </div>
                                                <div class="col-lg-8 col-md-8">
                                                    <h4>Total Users</h4>
                                                </div>
                                                <div class="col-lg-2 col-md-2">
                                                    <h4>{{adminStore.sharper_details.total_users}}</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </th>
                                <th>
                                    <div class="panel-inner panel panel-default">
                                        <div class="panel-body">
                                            <div class="row">
                                                <div class="col-lg-2 col-md-2">
                                                    <i class="fa fa-th-list" aria-hidden="true"></i>
                                                </div>
                                                <div class="col-lg-8 col-md-8">
                                                    <h4>Projects</h4>
                                                </div>
                                                <div class="col-lg-2 col-md-2">
                                                    <h4>{{adminStore.sharper_details.total_projects}}</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </th>
                                <th>
                                    <div class="panel-inner panel panel-default">
                                        <div class="panel-body">
                                            <div class="row">
                                                <div class="col-lg-2 col-md-2">
                                                    <i class="fa fa-spinner" aria-hidden="true"></i>
                                                </div>
                                                <div class="col-lg-8 col-md-8">
                                                    <h4>Completed</h4>
                                                </div>
                                                <div class="col-lg-2 col-md-2">
                                                    <h4>{{adminStore.sharper_details.projects_completed}}</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td colspan="4">
                                    <h4>Admin Functions</h4>
                                     <div class="row">
                                         <div class="col-lg-3 col-md-3">
                                             <router-link to="/add-project" class="btn-clear btn btn-success btn-lg btn-block">Add Project</router-link>
                                         </div>
                                         <div class="col-lg-3 col-md-3">
                                             <a href="#" class="btn-clear btn btn-success btn-lg btn-block">Add Admin</a>
                                         </div>
                                         <div class="col-lg-3 col-md-3">
                                             <a href="#" class="btn-clear btn btn-success btn-lg btn-block">Change Project Status</a>
                                         </div>
                                         <div class="col-lg-3 col-md-3">
                                             <a href="#" class="btn-clear btn btn-success btn-lg btn-block">Admin</a>
                                         </div>
                                     </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
    import {mapState} from 'vuex'
    import UserDetails from './UserDetails.vue'
    import UserActions from './UserActions.vue'
    export default {
        components: {
            'user-details': UserDetails,
            'user-actions': UserActions
        },
        computed: mapState({
            adminStore: state => state.adminStore
        }),
        created(){
            this.$store.dispatch('setSharperDetails')
        }
    }
</script>

<style lang="sass">
    .dashboard
        .panel-inner
            padding: 10px 10px 10px
            margin: 30px 0 30px
            border: 2px solid green
            /*border: 2px solid #0099cc*/
            border-radius: 5px
            text-align: center
            i
                height: 40px
                width: 40px
                padding: 10px
                text-align: center
                font-size: 17px
                border-radius: 50%
                background-color: #a0db8e
                color: #fff
    .dashboard .btn-clear
        background-color: transparent !important
        color: green
</style>