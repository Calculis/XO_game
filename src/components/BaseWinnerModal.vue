<script setup>
defineProps({
    winner:{
        type:Object,
        required:true
    }
})
defineEmits(['exit'])
</script>
 
<template>
 <div class="w-screen h-screen h-min-screen  flex justify-center items-center bg-slate-800 relative">

    <div class="w-full h-full flex items-center justify-center fixed bg-black bg-opacity-80"
   @click="$emit('exit')"
    >
    <h1 v-show="winner.name!=='draw'" class="text-[100px] text-white text-center" >{{winner.name}} is a winner</h1>
    <h1 v-show="winner.name==='draw'" class="text-[100px] text-white text-center" >{{winner.name}} </h1>

    </div>
    </div>
</template>
 
<style>

</style>