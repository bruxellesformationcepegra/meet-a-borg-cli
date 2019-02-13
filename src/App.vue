<template>
  <div>
      <Header/>
      <RobotFilter :robots="filteredRobots"/>
      <RobotList :robots="filteredRobots"/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import RobotFilter from './components/RobotFilter.vue'
import RobotList from './components/RobotList.vue'

export default {
  name: 'app',
  data(){
    return {
      
    }
  },
  computed: {
    //ce qui était avant dans les data de App.vue est maintenant dans le state,
    //on va chercher les valeurs du state, on les rend dispo via des computed properties
    allRobots(){
      return this.$store.state.allRobots
    },
    filteredRobots(){
      return this.$store.getters.filteredRobots
    }
  },
  components: {
    Header,
    RobotFilter,
    RobotList
  },
  created(){
    //pour lancer l'appel ajax qui est maintenant dans le store
    this.$store.dispatch('getRobots')
  }
}
</script>

<style lang="scss">
@import './assets/sass/style.scss';

#app {

}
</style>
