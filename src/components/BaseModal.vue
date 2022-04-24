<script setup>
import { ref, reactive, computed, onBeforeUnmount } from "vue";
const bg = ref('images/bgv2.jpg')

let player1 = reactive({ name: "",score:0, win: 0,play:0, symbol: "x" });
let player2 = reactive({ name: "",score:0, win: 0,play:0, symbol: "o" });
let board_size = ref(3); //default value
let total_round = ref(3); //default
defineEmits(['setting_data'])


</script>
 
<template>
<div >
<img :src="bg" class="w-full h-full no-repeat center center fixed"/>
 <div
      class="w-full h-full flex items-center justify-center fixed bg-black bg-opacity-30"
    >
    <nav>
<div class="absolute inset-x-0 top-7 container flex flex-wrap font-bold text-xl justify-between  mx-auto text-white">
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
      <div
        class="text-black w-7/10 h-1/2 text-center justify-center p-4 bg-purple-400 text-2xl rounded-xl"
      >
        <h1 class="text-3xl m-4 drop-shadow">♡ Rule Setting ♡</h1>
        <div
          class="text-left pl-8 m-auto grid grid-cols-2 gap-4 justify-center"
        >
          <div class="col-span-2">
            <label for="playerName1" class="bg-pink-300 p-2 rounded-md">Player 1 : </label>
            <input
              v-model="player1.name"
              id="playerName1"
              placeholder="Player1"
              class="p-2 rounded-md m-2 w-40 text-black"
            /><br>
            <label for="playerName2" class="bg-blue-300  p-2 rounded-md">Player 2 : </label>
            <input
              v-model="player2.name"
              id="playerName2"
              placeholder="Player2"
              class="p-2 rounded-md m-2 w-40 text-black"
            />
          </div> 

   <label>Board Size :</label>
          <select class="w-20 p-2 rounded" v-model="board_size">
            <option value="3" selected>3</option>
            <option value="4">4</option>
            <option value="5">5</option>
           
          </select> 

   <label for="round"> Round : </label>
          <input
            type="number"
            min="1"
            max="9"
            class="p-2 rounded w-20"
            
            v-model="total_round"
          />
          <div></div>
          <div class="text-right mr-4">
            <button
              class="p-2 border-2 border-x-amber-100 w-20 bg-white rounded-xl"
              @click="$emit('setting_data',player1,player2,board_size,total_round)"
            >
              Ok
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
    
</template>
 
<style>

</style>
