<template>
     <div  class="robot" :title="robot.first_name + ' ' + robot.last_name" :data-gender="robot.gender" >
        <h4 class="robot__name">{{robot.first_name}} <strong>{{robot.last_name}}</strong></h4>
        <div class="overflowed-box">
          <img class="robot__portrait" :src="robot.portrait" >
          <small class="robot__type"><strong>Type</strong> : {{robot.type}}</small>
          <div class="robot__language"><strong>Langue parlée</strong> :<br> {{robot.language}}</div>
        </div>
        <p class="robot__description">{{robot.description}}</p>
      </div>
</template>

<script>
export default {
    props: ['robot']
}
</script>

<style>

</style>
