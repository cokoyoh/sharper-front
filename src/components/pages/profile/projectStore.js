import Vue from 'vue'
import {get_header, get_user_projects_url, projects_list_url} from "../../../global/config";

const state = {
    projects_list: {},
    current_project: null,
    user_projects: {},
}

const mutations = {
    SET_PROJECTS_LIST(state, projects_list){
        state.projects_list = projects_list
    },
    SET_CURRENT_PROJECT(state,project){
        state.current_project = project
    },
    SET_USER_PROJECTS(state, user_projects){
        state.user_projects = user_projects
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
    },
    setUserProjects: ({commit}, user_projects) => {
        return Vue.http.get(get_user_projects_url,{headers:get_header()})
            .then(response => {
                console.log(response)
                commit('SET_USER_PROJECTS', response.body.data)
            })
    }
}

export default {
    state, mutations, actions
}