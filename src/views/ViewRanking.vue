<script setup>
import BaseRanking from '../components/BaseRanking.vue';
import {ref} from 'vue'
const rankbg = ref('images/rankbg.jpg')
const cup = ref('images/cup.png')
</script>
 
<template>
<div class="w-full h-full fixed bg-center bg-[url('../../public/images/rankbg.jpg')] font-mono">
    <div>
  <img :src="cup" class="h-20 w-20 mt-10 m-10">
    </div>
    <div class="m-10 rounded-md flex items-center justify-center">
        <BaseRanking/>
    </div>
</div>
<nav>
<div class="absolute inset-x-0 top-7 container flex flex-wrap font-bold text-xl justify-between  mx-auto text-white">
<h1 class="ml-40 m-5 text-[40px] subpixel-antialiased font-sans font-bold text-6xl text-white drop-shadow-lg">RANKING BOARD</h1>  
<span class="text-opacity-80 font-bold text-white"></span>
<ul class="flex flex-col mt-4 md:flex-row md:space-x-5 md:mt-0 md:text-sm md:font-medium">
<li>
<router-link :to="{name:'home'}" aria-current="page"><button class="bg-violet-500 hover:bg-violet-700 text-white font-bold text-2xl py-3 px-12 rounded-full shadow-lg">
HOME</button></router-link>
</li>
<li>
<router-link :to="{name:'ranking'}" aria-current="page"><button class="bg-violet-500 hover:bg-violet-700 text-white font-bold text-2xl py-3 px-12 rounded-full shadow-lg">
RANK</button></router-link>
</li>
</ul>
</div>
</nav>
</template>
 
<style>

</style>
