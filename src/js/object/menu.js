const menu_btn = document.querySelector('.mobile_menu .title')
const menu_list = document.querySelector('.mobile_menu ul')
menu_btn.addEventListener('click',function(){
    menu_list.classList.toggle('active')
})