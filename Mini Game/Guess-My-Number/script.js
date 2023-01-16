'use strict';
//number = Math.trunc(Math.random()*20)+1;
let a = 20;
let message = document.querySelector('.message')
let score = document.querySelector('.score');
let highscore = document.querySelector('.highscore')

let number = document.querySelector('.number')



number = 16;


function check(){
    let guess = Number(document.querySelector('.guess').value)
    if(!guess){
    document.querySelector('.message').textContent = "No Number"
   }
   else if(guess===number){
    document.querySelector('.message').textContent ="Correct"
    document.querySelector('.number').textContent = number;
    document.querySelector('.highscore').textContent = a;
    document.querySelector('body').style.backgroundColor='green'
   }
   if(0<a){
    
     if(guess > number){
        document.querySelector('.message').textContent ="Too high"
        a--;
        document.querySelector('.score').textContent = a;
       }
       else if(guess < number){
        document.querySelector('.message').textContent ="Too Low"
        a--;
        document.querySelector('.score').textContent = a;
       }  
   }
   else{
    document.querySelector('.message').textContent ="Game Over"
   }
}
document.querySelector('.again').addEventListener('click',function(){
    document.querySelector('.message').textContent ="Start guessing..."
    document.querySelector('.number').textContent ="?"
    document.querySelector('.guess').value=''
});

