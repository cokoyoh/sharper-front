import Vue from 'vue'
import VueRouter from 'vue-router'


const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: require('./components/pages/home-components/Home.vue'),
            name:'home',
        },
        {
            path: '/forgot-password',
            component: require('./components/reset_password/ForgotPassword.vue'),
            name:'forgot-password',
        },
        {
            path: '/reset-password/:token',
            component: require('./components/reset_password/ResetPassword.vue'),
            name:'reset-password',
        },
        {
            path: '/login',
            component: require('./components/auth/Login.vue'),
            name:'login',
        },
        {
            path: '/register',
            component: require('./components/auth/Register.vue'),
            name:'register',
        },
        {
            path: '/dashboard',
            component: require('./components/pages/users/Dashboard.vue'),
            name:'dashboard',
            meta: {
                requiresAuth: true ,
                requiresAdmin: true,
            }
        },
        {
            path: '/client-dashboard',
            component: require('./components/pages/users/ClientDashboard.vue'),
            name:'client-dashboard',
            meta: {
                requiresAuth: true ,
            }
        },
        {
            path: '/all-projects',
            component: require('./components/pages/profile/AllProjects.vue'),
            name:'all-projects',
            meta: {
                requiresAuth: false ,
            }
        },
        {
            path: '/contact-us',
            component: require('./components/pages/Contact.vue'),
            name:'contact-us',
            meta: {
                requiresAuth: false ,
            }
        },
        {
            path: '/add-project',
            component: require('./components/pages/users/admin/AddProject.vue'),
            name:'add-project',
            meta: {
                requiresAuth: true ,
                requiresAdmin: true,
            }
        },
        {
            path: '/project-details/:project/show',
            component: require('./components/pages/profile/ProjectDetails.vue'),
            name:'project.show',
            meta: {
                requiresAuth: false ,
            }
        },
    ],
    mode: 'history',
})



/**
 * Auth guards here
 */
router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth){
        const auth_user = JSON.parse(window.localStorage.getItem('auth_user'))
        if(auth_user && auth_user.access_token){
            next()
        } else next('login')
    }
    if(to.meta.requiresAdmin){
        const auth_user = JSON.parse(window.localStorage.getItem('auth_user'))
        if(auth_user.role === 'admin'){
            next()
        } else next('/')
    }
    next()
})

Vue.use(VueRouter)

export default router