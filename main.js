
if(window.screen.width < 1000){
    document.querySelectorAll(".xyz-funcoes").forEach(element => {element.classList.add("flex-column");});
}

if(document.querySelector(".offcanvas").classList.contains('show')){
    document.querySelector(".xyz-home").classList.add("d-none");
}