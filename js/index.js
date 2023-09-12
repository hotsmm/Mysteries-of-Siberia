var hamb = document.querySelector('#hamb');
var popup = document.querySelector('#popup');
var menu = document.querySelector('#menu').cloneNode(1);
var body = document.body;

hamb.addEventListener('click',hambHandler);

function hambHandler(e) {
    e.preventDefault();
    popup.classList.toggle('open');
    hamb.classList.toggle('active');
    body.classList.toggle('noscroll');
    renderPopup();
}

function renderPopup() {
    popup.appendChild(menu);
}

var links  = Array.from(menu.children);

links.forEach((link) => {
    link.addEventListener('click', closeOnClick);
})

function closeOnClick(){
    popup.classList.remove('open');
    hamb.classList.remove('active');
    body.classList.remove('noscroll');
}

if (document.getElementById('slider__viewport')) {
    let viewport = document.getElementById('slider__viewport').offsetWidth;
    }
    

 // Получаем видимую часть слайда
 let viewport = document.getElementById("slider__viewport").offsetWidth;
  // Получаем кнопку вперёд
  let btnNext = document.getElementById("slider__control-next");
  // Получаем кнопку назад
  let btnPrev = document.getElementById("slider__control-prev");
  // Получаем элемент со всеми слайдами
  let slider = document.querySelector("div.slider");
  // Получаем элементы показа слайда
  let viewSliders = document.querySelectorAll(".viewSlide");

 // Обработка клика на кнопку вперёд
  btnNext.addEventListener("click", function () {
    if (viewSliders < 6) { // Если верно то
        // Увеличиваем номер слайда на один
        viewSliders++;
    } else { // Иначе
        // Номер слайда равен нулю
        viewSliders = 0;
    }
    slider.style.left = -viewSliders * viewport + "px";
});

// Обработка клика на кнопку назад
btnPrev.addEventListener("click", function () {
    
    // Условие, если номер слайда больше нуля
    if (viewSliders > 0) { // Если верно то
        // Уменьшаем номер слайда
        viewSliders--; 
    } else { // Иначе
        // Номер слайда равен четырём
        viewSliders = viewSliders.length; 
    }
   
    // Меняем позицию всего слайда
    slider.style.left = -viewSliders * viewport + "px";
});
