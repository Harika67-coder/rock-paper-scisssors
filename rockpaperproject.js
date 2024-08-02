let computerMove='';
let isautoplay=false;
let intervalId;
const resultElement=document.querySelector('.js-result');
let result;
const movesresult=document.querySelector('.js-moves');
const scoreresult=document.querySelector('.js-score');
let score=JSON.parse(localStorage.getItem('score')) ||  {wins:0,
  losses:0,
  ties:0};
  let buttonElement=document.querySelector('.js-button');
function pickcomputermove(){
   let randomnumber=Math.random();
   if(randomnumber>=0 && randomnumber<1/3){
            computerMove="rock";         
   } 
   else if(randomnumber>=1/3 && randomnumber<2/3){
            computerMove="paper";         
   } 
   else if(randomnumber>=2/3 && randomnumber<1){
            computerMove="scissors";         
   } 
   return computerMove;
}
function playerGame(playerMove){
  computerMove=pickcomputermove()
  console.log(computerMove);
  if(playerMove==="rock"){
    if(computerMove==="rock")
    {
         result="Tie.";
    }
    else if(computerMove==="paper"){
         result="You lose."; 
    }
    else if(computerMove==="scissors"){
         result="You win.";
    }
  }
  else if(playerMove==="paper"){
    if(computerMove==="rock")
    {
         result="You win.";
    }
    else if(computerMove==="paper"){
         result="Tie."; 
    }
    else if(computerMove==="scissors"){
         result="You lose."; 
    }
}
else if(playerMove==="scissors"){
    if(computerMove==="rock")
    {
         result="You lose.";
    }
    else if(computerMove==="paper"){
         result="You win.";
    }
    else if(computerMove==="scissors"){
         result="Tie."; 
    }   
 }  
 if(result==='You win.'){
  score.wins+=1;
 }
 else if(result==='You lose.'){
  score.losses+=1;
 }
 else if(result==='Tie.'){
  score.ties+=1;
 }
 localStorage.setItem('score',JSON.stringify(score));
 resultElement.innerHTML=result;
 movesresult.innerHTML=`You <img src="rock-paper-scissors-images/${playerMove}-emoji.png" class="move-icon"> <img src="rock-paper-scissors-images/${computerMove}-emoji.png" class="move-icon"> computer`;
 updateScore(score);
}     
function updateScore(score){
scoreresult.innerHTML=`Wins:${score.wins},Losses:${score.losses},Ties:${score.ties}`;
}
function autoplay(){
 if(!isautoplay)
 {
  intervalId=setInterval(()=>{
    playerMove=pickcomputermove();
    playerGame(playerMove);
    buttonElement.innerHTML="Stop Play"
  },1000);
  isautoplay=true;
 }
 else{
  clearInterval(intervalId);
  isautoplay=false;
  buttonElement.innerHTML="Stop Play"
 }
}
document.body.addEventListener('keydown',(event)=>{
     if(event.key==='r'  || event.key==='R'){
       playerGame('rock');
     }
     else if(event.key==='p' || event.key==='P'){
       playerGame('paper');
     }
     else if(event.key==='s' || event.key==='S'){
          playerGame('scissors');
        }
});