const state = {
    auth_user: null
}

const mutations = {
    SET_AUTH_USER(state, user_object){
        state.auth_user = user_object
    },

    CLEAR_AUTH_USER(state){
        state.auth_user = null
    }

}

const actions = {
    setUserObject: ({commit}, user_object) => {
        commit('SET_AUTH_USER', user_object)
    },

    clearAuthUser: ({commit}) => {
        commit('CLEAR_AUTH_USER')
    }
}

export default {
    state, mutations, actions
}