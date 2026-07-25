var timer = 30;
var hitrn= 0 ;
var score= 0 ;
  function makeBubble(){
var clutter = "";
     for( i=1 ; i<=147 ; i++){
       var rn = Math.floor(Math.random()*10)
       clutter +=  `<div class="bubble">${rn}</div>`
         
      }
       document.querySelector("#pbtm").innerHTML= clutter
    }
function runTimer(){
    var timerint = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").innerHTML= timer ; 
        }
        else{
            clearInterval(timerint);
            // document.querySelector("#pbtm").innerHTML=`<div id="over">game over <br><br> your score : ${score}</div>`;
           document.querySelector("#panel").innerHTML=
           `<div id="done">
           <h1>game over</h1>
           <h2> your score : ${score}</h2>
           <button id="retry">
           <a href="./index.html">RETRY</a>
           </button>
           </div>`;
        }
    },1000);
}
function newHit(){
    hitrn = Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent= hitrn;
}
function increaseScore(){
    score += 5;
    document.querySelector("#scoreval").textContent= score;
}
document.querySelector("#pbtm").addEventListener("click", function(dets){
 var clickednum = Number(dets.target.textContent);
 if(clickednum === hitrn){
    increaseScore();
    makeBubble();
    newHit();
 }
});

newHit();
runTimer();
makeBubble();
