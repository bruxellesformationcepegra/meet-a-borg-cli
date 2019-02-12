<template>
    <div>
        <p>Il y a <span class="hommes"> {{males}} hommes</span> et <span class="femmes">{{females}} femmes</span> !</p>
    </div>
</template>

<script>
export default {
    props:['males', 'females']
}
</script>

<style>

</style>
