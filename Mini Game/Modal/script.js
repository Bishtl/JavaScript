'use strict';
const modal = document.querySelector('.modal');
const closeModal  = document.querySelector('.close-modal')
const overlay  = document.querySelector('.overlay')
const showModal = document.querySelectorAll('.show-modal')

for(let i = 0; i<showModal.length;i++)
showModal[i].addEventListener('click',function(){
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
})
closeModal.addEventListener('click', function(){
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
})
overlay.addEventListener('click',function(){
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
})
document.addEventListener('keydown',function(e){
    
    if(e.key==='Escape'){
        if(!modal.classList.contains('hidden')){

        
        modal.classList.add('hidden')
        overlay.classList.add('hidden')
    }
}
})

