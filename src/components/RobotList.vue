<template>
    <section class="robots">
        <RobotItem v-for="r in robots"  :key="r.id" :robot="r" />
    </section>
</template>

<script>
import RobotItem from './RobotItem.vue'

export default {
    name:'RobotList',
    props: ['robots'],
    components:{
        RobotItem
    }
}
</script>

<style>

</style>
