import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export const store = new Vuex.Store({
    //le state de mon app: tous les robots et le filtre actif
    state: {
        allRobots: [],
        filter: ''
    },
    //on ne peut pas modifier le state directement, on doit passer par des mutations qui vont mettre à jour le state pour nous
    //ces mutations vont être appelées depuis nos composants via 'commit'
    mutations: {
        updateRobots(state, robots){
            state.allRobots = robots
        },
        updateFilter(state, filter){
            state.filter = filter
        }
    },
    //les actions vont pouvoir être appelées depuis nos composants via 'dispatch'
    actions: {
        getRobots(context){
            //on récupère les robots en ajax
            axios.get("https://wt-902485dbb4fca4fccee3a0efcde5b34c-0.sandbox.auth0-extend.com/robots")
            .then(response => {
                //on modifie le state via une mutation
                context.commit('updateRobots', response.data)
            })
            .catch(err => {console.error(err)})
        }
    },
    //les getters sont un moyen de récupérer des valeurs dérivées du state
    //on va les appeler dans nos composants
    getters: {
        //les robots, filtrés en fonction du gender qui est dans le state
        filteredRobots(state){
            if(state.filter){
                return state.allRobots.filter(robot => robot.gender === state.filter)
              }
              else {
                return state.allRobots
              }
        },
        //le nombre d'hommes
        malesCount(state, getters){
            return getters.filteredRobots.filter(robot => robot.gender === "Male").length
        },
        //le nombre de femmes
        femalesCount(state, getters){
            return getters.filteredRobots.filter(robot => robot.gender === "Female").length
        }
    }
})