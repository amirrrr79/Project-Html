const toggle_btn=document.getElementById('toggle')
const aside=document.getElementById('aside')
const off_btn=document.getElementById('off')

toggle_btn.addEventListener('click', function(){
   aside.classList.add('show-menu')
   
})

off_btn.addEventListener('click',function(){
    aside.classList.remove('show-menu')
})