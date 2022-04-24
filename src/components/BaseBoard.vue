<script setup>
import { ref,computed,reactive } from '@vue/reactivity';
import { onBeforeUpdate } from 'vue';


// ---------------------- class dynamic var ----------------------
let size1 = 'text-[100px] w-40 h-40' 
let size2 = 'text-[85px] w-32 h-32'
let size3 = 'text-[75px] w-28 h-28' 
defineEmits(['toggleWinner'])
const props=defineProps({
    player1:{
        type:Object,
         default:'Player1'
    },
    player2:{
        type:Object,
        default:'Player2'
    },
    board_size:{
        type:Number,
        default:3
    },
    round:{
        type:Number,
        default:3
    }
})
const current_round= computed(()=>{
  return props.player1.score+props.player2.score+1
})
let initialState = [ //default
  ["","",""],
  ["","",""],
  ["","",""],
]

onBeforeUpdate(()=>{
  extend_cell()
})

let xo = reactive(initialState);
let turn = ref(0);

const matchDetail=computed(()=>{
  const match= {player1:props.player1,player2:props.player2,status:"",winner:{},loser:{}}
  if (props.player1.score+props.player2.score=== props.round & props.player1.score===props.player2.score){
    match.status="draw"
    return match
  }
   else if(props.player1.score+props.player2.score=== props.round|(props.player1.score> props.round/2)|(props.player2.score> props.round/2)){
    props.player1.score>props.player2.score ?  (match.winner=props.player1,match.loser=props.player2):(match.winner=props.player2,match.loser=props.player1)
    match.status="done"
     return match
  }else{
    return undefined
  }
}
 )

// logic function
const clickPlay = (row, col) => {
  const whose_turn = turn.value % 2 === 0 ? "x" : "o";
  xo[row][col] = whose_turn;
  const player_turn = whose_turn=== 'o'? props.player2:props.player1
  check_win_condition(player_turn);
  
  turn.value++;
  
};
// function เช็ค array player ที่ส่งมา
// ชนะเรียงตรงแถวเดียวกัน (แนวนอน) หรือยัง
const win_by_row = (player) => {
  let result = false;
  xo.forEach((rows) => {
    if (rows.every((row) => row === player)) {
      result = true;
    }
  });
  return result;
};
// ชนะแบบเรียงแนวตั้ง 
const win_by_col = (player) => {
  let result = false;
  // แถวแรกทั้งแถวไม่มีของตัวเองเลยไม่สามารถชนะแนวตั้งได้
  if (xo[0].every((row) => row != player)) return result;
  // transpose 2d array
  const trans_xo = xo[0].map((_, colIndex) => xo.map((row) => row[colIndex]));
  trans_xo.forEach((row) => {
    if (row.every((element) => element === player)) {
      result = true;
    }
  });
  return result;
};
// ชนะแบบเฉียงซ้ายไปขวา
const win_by_diagonal_L = (player) => {
  // check from left
  for(let i=0;i<xo.length;i++){
    if(xo[i][i]!==player ){
     return false
    }
    
}
return true
 
}
// ชนะแบบเฉียงขวาไปซ้าย
const win_by_diagonal_R=(player)=>{
  //check from right
   for(let k=0;k<xo.length;k++){
    if(xo[k][xo.length-(1+k)]!==player){
      return false
    }
  }
  
   return true
  
}
// เสมอหรือไม่ return boolean เกิดจากไม่มีใครชนะ และตารางเต็มแล้ว
const isDraw = () => {
  for (let i = 0; i < xo.length; i++) {
    if (xo[i].includes("")) {
      return false;
    }
  }
  return true;
};
// clear array เป็นสภาพเริ่มแรก
const reset = () => {
  for (let i = 0; i < xo.length; i++) {
    for (let v = 0; v < xo.length; v++) {
      xo[i][v] = "";
    }
  }

};
// สั่งโหลดหน้าเว็บใหม่
const reload=()=>{
  const conf=confirm("Restart Game!?")
  if(conf){
  location.reload()
  }
}
// เอา function เช็คการชนะมารวมๆ เช็คทีเดียว 
const check_win_condition = (player) => {
  console.log(matchDetail.value);
  // check winner after click
  if (win_by_row(player.symbol) | win_by_col(player.symbol) | win_by_diagonal_R(player.symbol)|win_by_diagonal_L(player.symbol)) {
 
    alert(`${player.name} won this round!`)
    player.score++

    reset()

  } else if (isDraw()) {
    
    alert(`draw!`)
    reset()
  }
  }

  const extend_cell=()=>{ 
  let emp=""
  let extend_loop=props.board_size-xo.length
  
  for(let i=0;i<xo.length;i++){
    for(let k=0;k<extend_loop;k++){
      
      xo[i].push(emp)
    }
  }

  for(let i=0;i<extend_loop;i++){ 
    
  xo.push(getCell())
  }
}
const getCell=()=>{ 
  
  let inner_cell=[]
  for(let k=0;k<props.board_size;k++){
      inner_cell.push("")
    }
  
  return inner_cell
}


</script>
 
<template>


<div
    class="w-screen h-screen h-min-screen  flex justify-center items-center bg-slate-800 relative"
  >
 <div class="flex flex-col w-3/5 text-center justify-center pt-8">
      <h1 class="text-[40px] text-white text-center border-2 border-">XO - Game</h1>
      <h2  class="text-[40px] text-white text-center  border-t-2 border-b-2 border-gray-300 m-4">round {{current_round}}</h2>
      <div>
        <p style="float: left;" class=" w-2/5 font-mono rounded-md p-4 m-2 bg-purple-900 text-slate-200">
          {{ player1.name }} (X) :  {{player1.score}}
        </p>
        <p style="float: right;" class=" w-2/5 font-mono rounded-md p-4 m-2 bg-purple-900 text-slate-200">
          {{ player2.name }} (O) : {{player2.score}}
        </p>
      </div>
      <div id="board" class="m-4 rounded-md text-center ">
        <div v-for="(list, row) in xo" :key="'row' + row" >
          <input   
            v-for="(sublist, col) in list"
            v-model="xo[row][col]"
            :key="`xo${row}${col}`"
            @click="clickPlay(row,col);$emit('toggleWinner',matchDetail)"
            :disabled="xo[row][col] === '' ? false : true"
            class=" cursor-pointer font-mono border-solid border-2 rounded-md border-white p-4 bg-purple-500 hover:bg-purple-400 text-center"
            :class="[ (board_size==3 ? size1 : ( board_size==4? size2 : size3 )), xo[row][col]==='x' ? 'text-pink-900' : 'text-blue-900']"
          />
        </div>
      </div>
      <div >
      <button
        @click="reload"
        class="font-mono rounded-md p-2 bg-purple-900 hover:bg-purple-400 text-slate-200 w-2/3 justify-end"
      >
        Restart
      </button>
      </div>
    </div>
    </div>
</template>
 
<style>

</style>