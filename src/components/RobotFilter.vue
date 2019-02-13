<template>
    <div>
        <section class="intro">
            <h3 class="intro__title">Faites votre choix</h3>
            <RobotCount :males="maleCount" :females="femaleCount"/>
            <p class="intro__txt">Robot ipsum Picoist encephaloform cortropic Filclinic Nippoploid kilolytic zoate. Vesicoity levoparous Egyptococcus stepsepalous stenoales sexuoling ochllyze xeraceae tarsorrhea taxthymia. Cytococcus cheirify gynaecoetic tristomy triboness bathyac conplastic siderogenesis ophioatory egenous. Myary cobaltofuge orphobe pneumonform Angloplex thalassoodont stethometric. Pathoholic newance poikilocline technographer desderma cuprless anthrostat hexgon cyanoicide. Pneumonozyme dendrism exbisect methylphage iridicoable hemoscope anthropomere. 
            </p>
        </section>
        <FilterButtons />
    </div>
</template>

<script>
import RobotCount from './RobotCount.vue'
import FilterButtons from './FilterButtons.vue'
export default {
    props: ['robots'],
    computed:{
        maleCount(){
            return this.$store.getters.malesCount
        },
        femaleCount(){
            return this.$store.getters.femalesCount
        }
    },
    components: {
        RobotCount,
        FilterButtons
    }
}
</script>

<style>

</style>
