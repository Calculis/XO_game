<script setup>
import { onBeforeMount, onBeforeUpdate, reactive,ref } from 'vue';
const bg = ref('images/purplebg.jpg')

</script>
 
<template>
<!-- Homepage--> 
<div>
    <img :src="bg" class="w-full h-full no-repeat center center fixed"/>
</div>
<nav>
<div class="absolute inset-x-0 top-7 container flex flex-wrap font-bold justify-between  mx-auto text-white">
<span class="text-opacity-80 font-bold text-3xl text-white">TIC TAC TOE GAME!!</span>
<ul class="flex flex-col mt-4 md:flex-row md:space-x-5 md:mt-0 md:text-sm md:font-medium">

<li>
<router-link :to="{name:'home'}" aria-current="page"><button class="bg-violet-500 text-2xl hover:bg-violet-700 text-white font-bold py-3 px-12 rounded-full shadow-lg">
HOME</button></router-link>
</li>
<li>
<router-link :to="{name:'ranking'}" aria-current="page"><button class="bg-violet-500 text-2xl hover:bg-violet-700 text-white font-bold py-3 px-12 rounded-full shadow-lg">
RANK</button></router-link>
</li>
</ul>
</div>
</nav>
<div class="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
    <router-link :to="{name:'init'}" aria-current="page">
    <button class="bg-white hover:bg-gray-200 text-violet font-bold py-5 px-20  text-2xl rounded-full shadow-lg ">
   LET'S PLAY</button></router-link>
</div>
<router-view></router-view>

</template>
 
<style>
</style>
