
// ПОЛУЧИТЬ ГЛАВНЫЙ БЛОК
// РЕЛАТИВ
// СОЗДАТЬ ОБЕРТКУ ДЛЯ ТОЧЕК INDICATORS
// ДОБАВИТЬ КЛАСС CAROUSEL-INDICATORS
// APPEND

// ЦИКЛ ДЛЯ РАВНОГО КОЛИЧЕСТВА ТОЧЕК К СЛАЙДАМ
// СОЗДАТЬ ТОЧКИ LI
// КАЖДЫЙ ТОЧКЕ АТРИБУТ DATA-SLIDE-TO i + 1
// СТИЛИ
// APPEND

// ПРИВЯЗАТЬ ПЕРВУЮ ТОЧКУ 
// МАССИВ
// К СООТВЕТСТВУЮЩЕМУ СЛАЙДУ
// push dot
// КАК В ПРОШЛОМ УРОКЕ -+
// НА ТОЧКИ ОБРАБОТЧКИ СОБЫТИЙ С ОБЪЕКТОМ СОБЫЙТИЙ ПЕРЕМЕННАЯ Е ТАРГЕТ ЗАДЕЙСТВОВАТЬ АТРИБУТ 
// НА СКОЛЬКО СМЕЩАТЬ И ТРАНСФОРМ
// ПРОВЕРКИ НА 10
// СОЗДАТЬ ФУНКЦИИ

const slides = document.querySelectorAll('.offer__slide'),
slider = document.querySelector('.offer__slider'),
prev = document.querySelector('.offer__slider-prev'),
next = document.querySelector('.offer__slider-next'),
total = document.querySelector('#total'),
current = document.querySelector('#current'),
slidesWrapper = document.querySelector('.offer__slider-wrapper'),
width = window.getComputedStyle(slidesWrapper).width,
slidesField = document.querySelector('.offer_slider-inner');

let slideIndex = 0;
    
    slider.style.position = 'relative';
    const indicators = document.createElement('ol'),
          dots = [];
          indicators.classList.add('.carousel-indicators');

          slider.append(indicators);

          for (let i = 0; i < slides.length; i++) {
              const dot = document.createElement('li');
              dot.setAttribute('data-slide-to', i + 1);
              dot.classList.add('dot');

              if (i == 0) {
                  dot.style.opacity = 1;
              }

              indicators.append(dot);
              dots.push(dot);
          }

          dots.forEach(dot => dot.style.opacity = '.5');
          dots[slideIndex - 1].opacity = 1;

          dots.forEach(dot => {
              dot.addEventListener('clicl', (e) => {
                const slideTo = e.target.setAttribute('data-slide-to');
                slideIndex = slideTo;
              });
          });