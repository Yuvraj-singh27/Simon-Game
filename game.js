let gameseq=[];
let userseq=[];
let h2=document.querySelector("h2");
let btns=["red","yellow","green","purple"];

let started=false;
let level=0;
document.addEventListener("keypress",function(){
   if(started==false){
      console.log("start");
      started=true;
      levelup();
   }
});
function levelup(){
   userseq=[];
   level++;
   console.log(level);
   h2.innerText=`Level ${level}`;
   let randmindx=Math.floor(Math.random()*3);
   let rndcolor=btns[randmindx];
   let rndbtn=document.querySelector(`.${rndcolor}`);
   gameseq.push(rndcolor);
   console.log(gameseq);

   gameflash(rndbtn);
  

}
function gameflash(btn){
   btn.classList.add("btnflash");
   setTimeout(function(){
      btn.classList.remove("btnflash");
   },250);


}





let allbtn=document.querySelectorAll(".btn");
for(btn of allbtn){
   btn.addEventListener("click",btnpress);
}

function btnpress(){
   let btn=this;
   userflash(btn);
   usercolor = btn.getAttribute("id");
   
   userseq.push(usercolor);
   checkAns(userseq.length-1);


}
function checkAns(idx) {
   console.log("level",level);
   // let idx=level-1;
   if(userseq[idx]===gameseq[idx]){
      if(userseq.length==gameseq.length){
         setTimeout(levelup,1000);
      }

   }
   else{
      h2.innerHTML=`Game Over! Your score was <b>${level}<b><br> press any key to start`;
      document.querySelector("body").style.backgroundColor ="red";
      setTimeout(function(){
      document.querySelector("body").style.backgroundColor ="white";

      },150)
      reset();
   }
}
function userflash(btn){
   btn.classList.add("userflash");
   setTimeout(function(){
      btn.classList.remove("userflash");
   },250);
  


}

function reset(){
   started=false;
   gameseq=[];
   userseq=[];
   level=0;
}
