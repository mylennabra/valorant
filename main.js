
if(window.screen.width < 576){
    document.querySelectorAll(".xyz-funcoes").forEach(element => {element.classList.add("flex-column");});
}

let decide = document.querySelector(".offcanvas"), btntoggles = document.getElementsByClassName("btntoggle"), home = document.querySelector(".xyz-home");

for (const btntoggle of btntoggles) {
    btntoggle.addEventListener('click', function onClick() {
        document.querySelector(".offcanvas").classList.contains('show') ? home.classList.add('d-none') : home.classList.remove('d-none');
    })
}