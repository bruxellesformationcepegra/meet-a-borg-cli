<template>
  <div>
      <Header/>
      <RobotFilter :robots="filteredRobots" @filterApp="filter($event)"/>
      <RobotList :robots="filteredRobots"/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import RobotFilter from './components/RobotFilter.vue'
import RobotList from './components/RobotList.vue'
import axios from 'axios'

export default {
  name: 'app',
  data(){
    return {
      allRobots: [],
      filteredRobots: []
    }
  },
  methods: {
    filter(type){
      console.log("App", type)
      if(type){
        this.filteredRobots = this.allRobots.filter(robot => robot.gender === type)
      }
      else {
        this.filteredRobots = this.allRobots
      }
    }
  },
  components: {
    Header,
    RobotFilter,
    RobotList
  },
  created(){
    axios.get("https://wt-902485dbb4fca4fccee3a0efcde5b34c-0.sandbox.auth0-extend.com/robots")
    .then(response => {
        this.allRobots = response.data;
        this.filteredRobots = this.allRobots;
        console.log(this.allRobots)
    })
  }
}
</script>

<style lang="scss">
@import './assets/sass/style.scss';

#app {

}
</style>
