var element = document.body;
var images = document.querySelector(".slider img");
function dark(){
    if(element.classList.length === 0)
        {
            images.src = "img/slider-couleur.webp"
        }else 
        { 
            images.src = "img/slider.webp"
        }
}

function toggleMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');
}

function myFunction(){
    element.classList.toggle("dark-mode");
    dark()
}






