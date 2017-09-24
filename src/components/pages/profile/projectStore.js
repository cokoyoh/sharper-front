import Vue from 'vue'
import {projects_list_url} from "../../../global/config";

const state = {
    projects_list: {},
    current_project: null,
}

const mutations = {
    SET_PROJECTS_LIST(state, projects_list){
        state.projects_list = projects_list
    },
    SET_CURRENT_PROJECT(state,project){
        state.current_project = project
    }

}

const actions = {
    setProjectsList: ({commit}, projects_list) => {
        return Vue.http.get(projects_list_url)
            .then(response => {
                console.log('projects_list', response)
                if(response.status === 200){
                    commit('SET_PROJECTS_LIST', response.body.data)
                    return response.body.data
                }
            })
    },
    setCurrentProject: ({commit}, project) => {
        commit('SET_CURRENT_PROJECT', project)
    }

}

export default {
    state, mutations, actions
}