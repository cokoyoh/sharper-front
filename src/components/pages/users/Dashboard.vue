<template>
  <div class="dashboard" id="dashboard">
      <div class="container">
        <div class="row">
            <div class="col-lg-4 col-md-4">
                <div class="panel panel-default">
                    <div class="panel-heading"><h4>Admin Details</h4></div>
                    <div class="panel-body">
                        <user-details></user-details>
                    </div>
                </div>
            </div>
            <div class="col-lg-8 col-md-8">
                <user-actions></user-actions>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
    import {mapState} from 'vuex'
    import UserDetails from './UserDetails.vue'
    import UserActions from './AdminActions.vue'
    export default {
        components: {
            'user-details': UserDetails,
            'user-actions': UserActions
        },
//        computed: mapState({
//            adminStore: state => state.adminStore
//        }),
//        created(){
//            this.$store.dispatch('setSharperDetails')
//        }
    }
</script>

<style lang="sass">
    .dashboard
        padding: 30px 0 30px
</style>