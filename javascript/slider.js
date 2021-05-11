const slider =  document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider-section");/*arreglo que contiene todas las imagenes*/
let sliderSectionLast = sliderSection[sliderSection.length -1];/*seleccion la ultima imagenes*/

const btnDerecho = document.querySelector("#btn-derecho");
const btnIzquierdo = document.querySelector("#btn-izquierdo");

/* Metodo para insertar la ultima imagen al inicio, al dar clic para retroceder imagenes*/

slider.insertAdjacentElement('afterbegin', sliderSectionLast); 

function moverDerecha(){
    let sliderSelectionFirst = document.querySelectorAll(".slider-section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSelectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500);
}

function moverIzquierda(){
    let sliderSection = document.querySelectorAll(".slider-section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast); 
        slider.style.marginLeft = "-100%";
    }, 500);
}

btnDerecho.addEventListener('click', function(){
    moverDerecha();
});

btnIzquierdo.addEventListener('click', function(){
    moverIzquierda();
});

setInterval(function(){
    moverDerecha();
}, 5000);
