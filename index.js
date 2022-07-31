const harmburger = document.querySelector(".harmburger");
const close = document.querySelector(".close");
const open = document.querySelector(".open");
const links = document.querySelector(".links");
const body = document.body;

harmburger.addEventListener("click",()=>{
    close.classList.toggle("open-close");
    open.classList.toggle("close-open");
    links.classList.toggle("show");
    body.classList.toggle("show");
})