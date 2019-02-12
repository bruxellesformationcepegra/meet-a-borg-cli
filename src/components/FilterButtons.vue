<template>
    <section class="choice">
      <button class="btn btn--neutral" @click="filter('')">Afficher tout le monde</button>
      <button class="btn btn--male" @click="filter('Male')">Afficher tous les hommes</button>
      <button class="btn btn--female" @click="filter('Female')">Afficher toutes les femmes</button>
    </section>
</template>

<script>
export default {
    methods:{
        filter(type){
            console.log(type)
            this.$emit('filterRobots', type)
        }
    }
}
</script>

<style>

</style>
