<template>
  <div class="dashboard" id="dashboard">
      <div class="container-fluid">
          <div class="row">
              <div class="col-lg-3 col-md-3 sidebar">
                  <div class="list-group">
                      <a href="#" class="list-group-item active">My Projects</a>
                      <a href="#" class="list-group-item">User Details</a>
                  </div>
              </div>
              <div class="col-md-9 col-md-offset-1 col-lg-9 col-lg-offset-1 main">
                  <h4 class="page-header">Dashboard</h4>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
    import UserDetails from './UserDetails.vue'
    import UserActions from './UserActions.vue'
    export default {
        components: {
            'user-details': UserDetails,
            'user-actions': UserActions
        }
    }
</script>

<style lang="sass">
    .dashboard
        padding: 30px 0 60px
        margin-left: 40px
    .dashboard .form-group
        border-style: none !important
</style>