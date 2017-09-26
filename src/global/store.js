import Vue from 'vue'
import Vuex from 'vuex'
import userStore from '../components/pages/users/userStore'
import projectsStore from '../components/pages/profile/projectStore'
import adminStore from '../components/pages/users/admin/adminStore'


Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        userStore,
        projectsStore,
        adminStore,
    },
    strict: debug
})