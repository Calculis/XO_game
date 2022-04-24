<script setup>import { onBeforeMount, ref } from 'vue';



const allPlayer=ref([])
onBeforeMount(async()=>{
    getAll()
})
const getAll=async()=>{
    const res= await fetch(' http://localhost:5000/users?_sort=win&_order=desc')
    if(res.status===200){
        allPlayer.value=await res.json()
    }else{
        console.log("failed to fetch!");
    }
}
const removePlayer = async (playerId) => {
  const res = await fetch(`http://localhost:5000/users/${playerId}`, {
    method: 'DELETE'
  })
  if (res.status === 200) {
    allPlayer.value = allPlayer.value.filter((player) => player.id !== playerId)
    console.log('deleted successfullly')
  } else console.log('error, cannot delete')
}

</script>
 
<template>
<div class="">
<table class="bg-violet-2b text-white text-center table-auto font-bold">
    <tr class="h-12 bg-yellow-v text-violet-2b text-xl">
    <th class="rounded w-32 p-4 border-x-4 border-violet-b">No.</th>
    <th class="rounded w-48 p-4 border-x-4 border-violet-b">Name</th>
    <th class="rounded w-48 p-4 border-x-4 border-violet-b">Match</th> 
    <th class="rounded w-48 p-4 border-x-4 border-violet-b">Win</th>
    </tr>
    <tr class="h-12" v-for="(player,i) in allPlayer" :key='player.id'>
    <td class="rounded border-y-4 border-violet-b">{{i+1}}</td>
    <td class="rounded border-4 border-violet-b">{{player.name}}</td>
    <td class="rounded border-4 border-violet-b">{{player.play}}</td>
    <td class="rounded border-4 border-violet-b">{{player.win}}</td>
    <td class="bg-slate-400 rounded border border-violet-b w-36 hover:bg-slate-700">
        <button @click="removePlayer(player.id)">delete</button>
        </td>
    </tr>

</table>    
</div>
</template>
 
<style>

</style>
