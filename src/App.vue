<script setup>
import { onBeforeMount, onBeforeUpdate, reactive,ref } from 'vue';

</script>
 
<template>

<router-link :to="{name:'home'}" aria-current="page"></router-link>
<router-link :to="{name:'ranking'}" aria-current="page"></router-link>
<router-link :to="{name:'init'}" aria-current="page"></router-link>
<router-view></router-view>

</template>
 
<style>
</style>
