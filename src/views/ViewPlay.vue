<script setup>
import { ref } from 'vue';
import BaseModal from '../components/BaseModal.vue'
import BaseBoard from '../components/BaseBoard.vue'
import BaseWinnerModal from '../components/BaseWinnerModal.vue'
import { e } from '../../dist/assets/vendor.65812781';
// variable
//------ Default setting---------
let player1=ref({ name: "player1", score: 0, symbol: "x" })
let player2=ref({ name: "player2", score: 0, symbol: "o" })
let board_size=ref(3)
let total_round=ref(3)
//  ----------------------------
const modal=ref(true)
const board=ref(false)
const winnerModal=ref(false)
const winner=ref({})
// Method
// เปลี่ยนค่า default ให้เป็นตามที่ user input
const getData=(p1,p2,size,round)=>{
if(p1.name!==""){
player1.value=p1
}
if(p2.name!==""){
player2.value=p2
}
board_size.value=parseInt(size)
total_round.value=parseInt(round)
modal.value= false
board.value=true

syncUser(p1,p2)
}
// method : เขียน player ใหม่ลงไปที่ json server
const syncUser=async(p1,p2)=>{
  const res = await fetch('http://localhost:5000/users')
  if(res.status===200){
    const data=await res.json()
    if(data.find((player)=> player.name===p1.name)=== undefined & p1.name!== ""){
        createPlayer(p1)
    }
     if(data.find((player)=> player.name===p2.name)=== undefined & p2.name!== ""){
       createPlayer(p2)
     }
  }
  
}
const createPlayer=async(player)=>{
    const res= await fetch('http://localhost:5000/users',{
      method:'POST',
      headers:{'content-type':'application/json'},
      body: JSON.stringify({"name": player.name,"win":player.win,"play":player.play})
    })
}
const toggleWinner=async(matchDetail)=>{
  console.log(matchDetail);
  if(matchDetail===undefined){
    
  }
 
    else {
     
    board.value=false
    winnerModal.value= true
    if(matchDetail.status!=='draw'){
    winner.value=matchDetail.winner
    }else{
      winner.value={name:'draw'}
    }
// update here
  if(matchDetail.status==='draw'){
    const allUser=await getUser()
    const p1= allUser.find((user)=>{
      return matchDetail.player1.name === user.name
    })
    const p2= allUser.find((user)=>{
    return  matchDetail.player2.name === user.name
    })
    updateUser(p1,{name:p1.name,win:p1.win,play:p1.play+1})
    updateUser(p2,{name:p2.name,win:p2.win,play:p2.play+1})
  }
  else{
    const allUser=await getUser()
    const winner= allUser.find((user)=>{
     return matchDetail.winner.name === user.name
    })
    
    console.log("winner:"+winner);
    const loser= allUser.find((user)=>{
      return matchDetail.loser.name === user.name
    })
  updateUser(winner,{name:winner.name,win:winner.win+1,play:winner.play+1})
  updateUser(loser,{name:loser.name,win:loser.win,play:loser.play+1})
  }
  }
   
    
}

const getUser=async()=>{
  let res= await fetch('http://localhost:5000/users')
   res=await res.json()
   return res
}
const updateUser=async(oldUser,newUser)=>{
   
    const res=await fetch(`http://localhost:5000/users/${oldUser.id}`,{
    method:'PUT',
    headers:{'content-type':'application/json'},
    body: JSON.stringify({"name":newUser.name,"win": newUser.win,"play":newUser.play})
    })
    if(res.status=== 200){
      console.log("updated!");
    }else{
      console.log("failed to update");
    }
   }



const reload=()=>{
  const conf=confirm("Restart Game!?")
  if(conf){
  location.reload()
  }
}
</script>
 
<template>
<BaseModal @setting_data="getData" v-show='modal'/>
<BaseBoard :player1="player1" :player2="player2" 
:board_size="board_size" :round="total_round" v-show="board"
@toggleWinner="toggleWinner"
/>

<BaseWinnerModal :winner="winner"  v-show="winnerModal" @exit="reload"/>
</template>
 
<style>
</style>