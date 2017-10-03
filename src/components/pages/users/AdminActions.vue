<template>
    <div class="user-actions">
        <div class="container-fluid">
            <h4>Use actions here</h4>
           <div class="row">
               <div class="col-lg-4 col-md-4">
               </div>
               <div class="col-lg-4 col-md-4"></div>
               <div class="col-lg-4 col-md-4"></div>
           </div>
            <div class="row">
               <div class="col-lg-12 col-md-12">
                   <ul class="list-group">
                       <li class="list-group-item"><router-link to="add-project" class="black-color">Add New Project<span class="badge pull-right"><i class="fa fa-plus" aria-hidden="true"></i></span> </router-link></li>
                       <li class="list-group-item"><router-link to="#"  class="black-color">Vew All Projects<span class="badge pull-right"><i class="fa fa-product-hunt" aria-hidden="true"></i></span></router-link></li>
                       <li class="list-group-item"><router-link to="edit-status"  class="black-color">Change Project Status<span class="badge pull-right"><i class="fa fa-wrench" aria-hidden="true"></i></span></router-link></li>
                   </ul>
               </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from  'vuex'
    export default {
        computed: mapState({
            adminStore: state => state.adminStore
        }),
        created(){
            this.$store.dispatch('setSharperDetails')
        }
    }
</script>

<style lang="sass">
    .user-actions span
        color: #222222
    .user-actions i
        font-size: 20px
    .user-actions .black-color
        color: #222222
        font-family: 'Lato', sans-serif
</style>