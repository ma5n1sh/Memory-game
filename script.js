let flipped = false;
let first,second;
let solved=0;
let locked=false;
let current;
let q=0;

function set4(){
    q=4;
}
function set6(){
    q=6;
}
function set46(){
    q=46;
}
function set76(){
    q=76;
}
function setter() {    
   var e = document.getElementById("selectos");
    q = e.options[e.selectedIndex].value;
    
    if(q==6){window.location.href = "6.html";}
     if(q==4){window.location.href = "4.html";}
    if(q==76){window.location.href = "7.html";}
    if(q==46){window.location.href = "46.html";}
    }
function flip(z){if(!locked){
     var x = document.getElementById(z);
    if(x!==current){
    x.classList.add('flip');
    current=x;
    if(!flipped){
        flipped=true;
        first=x;
        console.log(q);
    }
    else{ current='undefined';
        second=x;
        flipped=false;
        solved++;
        
        if(first.dataset.image!==second.dataset.image){locked=true;
         setTimeout(() => {
                            first.classList.remove('flip');
                            second.classList.remove('flip');solved--;locked=false;
                            }, 800);
           }
        else{first.removeAttribute("onclick");second.removeAttribute("onclick");}
     if((solved==8&&q==4)||(solved==188&&q==6)||(solved==21&&q==76)||(solved==12&&q==46)){
         var fb=document.getElementById("fourboady");
         var t1="<h1>";var t2=" Seconds</h1>";var t3=t1+p+t2;
         fb.innerHTML="<h1>CONGRATS Mate<br> Your Time is </h1>"+t3+"<br><h1>GUT GEMACHT!!!</h1>";
    }
       
    }
}}}



    
const cards = document.querySelectorAll('.card6');
(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 36);
    card.style.order = randomPos;
  });
})();
const cardsf = document.querySelectorAll('.card4');
(function shuffle() {
  cardsf.forEach(card => {
    let randomPos = Math.floor(Math.random() * 16);
    card.style.order = randomPos;
  });
})();
const cardss = document.querySelectorAll('.card7');
(function shuffle() {
  cardss.forEach(card => {
    let randomPos = Math.floor(Math.random() * 42);
    card.style.order = randomPos;
  });
})();
const cardsfs = document.querySelectorAll('.card46');
(function shuffle() {
  cardsfs.forEach(card => {
    let randomPos = Math.floor(Math.random() * 24);
    card.style.order = randomPos;
  });
})();
var p=0;
    (function time(){var w =document.getElementById('timer');
   var ttt=setInterval(()=>{
       
       
    w.innerHTML=p;p++;}
                   
                   
                   
               ,1000);})();