const NAVBAR = document.getElementById("nav-bar");
const LISTBAR = document.getElementById("list-bar");
const LIST_ITEM = document.getElementsByClassName("list-item");
const LOGO = document.getElementsByClassName("logo");
// member list
const slide = document.querySelector(".member-slide");
const slideItem = document.querySelectorAll(".slide-item");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");


let navBarActive = false;
let memberOrder = 0
let slideSize = slideItem[0].clientWidth

document.addEventListener('scroll', ()=>{
    var scrollPosition = window.scrollY
    if (scrollPosition > 200) {
        NAVBAR.classList.add("compact")
        for (var i = 0; i < LIST_ITEM.length; i++) {
            LIST_ITEM[i].classList.add("compact");
        }
    } else {
        NAVBAR.classList.remove("compact")
        for (var i = 0; i < LIST_ITEM.length; i++) {
            LIST_ITEM[i].classList.remove("compact");
        }
    }
});

nextButton.addEventListener('click', ()=>{
    if (memberOrder >= slideItem.length - 1) return
    slide.style.transition = 'transform 1.5s ease';
    memberOrder++;
    slide.style.transform = 'translateX(' + (-memberOrder * slideSize) + 'px)';
});

prevButton.addEventListener('click', ()=>{
    if (memberOrder <= 0) return
    slide.style.transition = 'transform 1.5s ease';
    memberOrder--;
    slide.style.transform = 'translateX(' + (-memberOrder * slideSize) + 'px)';
});
