import Vue from 'vue'
import {get_header, get_sharper_details_url, users_list_url} from "../../../../global/config";

const state = {
    sharper_details: {},
    users_list: {},
}

const mutations = {
    SET_SHARPER_DETAILS(state,sharper_details){
        state.sharper_details = sharper_details
    },
    SET_USERS_LIST(state, users_list){
        state.users_list = users_list
    }
}

const actions = {
    setSharperDetails: ({commit},sharper_details) => {
        return Vue.http.get(get_sharper_details_url,  {headers:get_header()})
            .then(response => {
                if(response.status === 200){
                    commit('SET_SHARPER_DETAILS', response.body.data)
                    console.log('Sharper Details', response.body.data)
                    // return response.body.data
                }
            })
    },
    setUsersList:({commit}, users_list) => {
        return Vue.http.get(users_list_url, {headers:get_header()})
            .then(response => {
                if(response.status === 200){
                    commit('SET_USERS_LIST', response.body.data)
                    console.log('All Users', response.body.data)
                }
            })
    }
}

export default {
    state, mutations, actions
}
