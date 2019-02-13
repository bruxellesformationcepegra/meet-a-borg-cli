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
            //ici au lieu de faire remonter l'info vers App.vue avec des $emit,
            //on change la valeur du filtre qui est dans le store
            this.$store.commit('updateFilter', type)
        }
    }
}
</script>

<style>

</style>
