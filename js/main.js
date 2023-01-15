const NAVBAR = document.getElementById("nav-bar");
const LISTBAR = document.getElementById("list-bar");
const LIST_ITEM = document.getElementsByClassName("list-item");
const LOGO = document.getElementsByClassName("logo");
// member list
const slide = document.querySelector(".member-slide");
const slideItem = document.querySelectorAll(".slide-item");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
const tabContent = document.querySelectorAll(".tab_content")
//tooltip
const em_text = document.querySelector(".tooltip em")
const tooltiptext = document.querySelector(".tooltip .tooltiptext")


let navBarActive = false;
let memberOrder = 0
let slideSize = slideItem[0].clientWidth

// Navigation bar
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

// Member slider and tab activator
function displayMemberTab() {
    tabContent.forEach((item, index)=>{
        if (index != memberOrder) {
            item.classList.remove('tab-active');
        } else {
            item.classList.add('tab-active');
        }
    })
    changeTooltipParentText(memberOrder);
}

nextButton.addEventListener('click', ()=>{
    if (memberOrder >= slideItem.length - 1) return
    slide.style.transition = 'transform 1.5s ease';
    memberOrder++;
    slide.style.transform = 'translateX(' + (-memberOrder * slideSize) + 'px)';
    displayMemberTab()
});

prevButton.addEventListener('click', ()=>{
    if (memberOrder <= 0) return
    slide.style.transition = 'transform 1.5s ease';
    memberOrder--;
    slide.style.transform = 'translateX(' + (-memberOrder * slideSize) + 'px)';
    displayMemberTab()
});

// Tooltip 
function changeTooltipParentText(memberIndex) {
    let memberName;
    switch (memberIndex) {
        case 0:
            memberName = "Dao Bao Duy";
            break;
        case 1:
            memberName = "Tran Nguyen Anh Minh";
            break;
        case 2:
            memberName = "Hoang Thai Phuc";
            break;
        case 3:
            memberName = "Tran Luu Quang Tung";
            break;
        default:
            break;
    }
    em_text.textContent = "currently viewing " + memberName;
}

function tooltipEnter() {
    tooltiptext.classList.add('visible')
}
function tooltipLeave() {
    tooltiptext.classList.remove('visible')
}