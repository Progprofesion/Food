function slider ({container, slide, prevArrow, nextArrow, totalCounter, currenCounter, wrapper, field}) {

  const slides = document.querySelectorAll(slide),
  slider = document.querySelector(container),
  prev = document.querySelector(prevArrow),
  next = document.querySelector(nextArrow),
  total = document.querySelector(totalCounter),
  current = document.querySelector(currenCounter),
  slidesWrapper = document.querySelector(wrapper),
  width = window.getComputedStyle(slidesWrapper).width,
  slidesField = document.querySelector(field);

  function binding() {
    dots.forEach(dot => dot.style.opacity = ".5");
    dots[slideIndex-1].style.opacity = 1;
  }

  function addZero() {
    if (slides.length < 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex;
    }
  }

let slideIndex = 1;
let offset = 0;

if (slides.length < 10) {
total.textContent = `0${slides.length}`;
current.textContent = `0${slideIndex}`;
} else {
total.textContent = slides.length;
current.textContent = slideIndex;
}

slidesField.style.width = 100 * slides.length + '%';
slidesField.style.display = 'flex';
slidesField.style.transition = '0.5s all';

slidesWrapper.style.overflow = 'hidden';

slider.style.position = 'relative';

const indicators = document.createElement('ol'),
    dots = [];
    indicators.classList.add('carousel-indicators');

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

function deteleNotDigits(str) {
return str.replace(/\D/g, '');
}        


slides.forEach(slide => {
slide.style.width = width;
});

next.addEventListener('click', () => {
if (offset == deteleNotDigits(width) * (slides.length - 2)) {
  offset = 0;
} else {
  offset += +deteleNotDigits(width);
}

slidesField.style.transform = `translate(-${offset}px)`;

if (slideIndex == slides.length) {
  slideIndex = 1;
} else {
  slideIndex++;
}

addZero();

binding();

dots.forEach(dot => {
  dot.addEventListener('click', (e) => {
      const slideTo = e.target.getAttribute('data-slide-to');

      slideIndex = slideTo;
      offset = deteleNotDigits(width) * (slideTo - 1);

      slidesField.style.transform = `translateX(-${offset}px)`;

      addZero();

      binding();
  });
});

});

prev.addEventListener('click', () => {
if (offset == 0) {
  offset = deteleNotDigits(width) * (slides.length - 2);
} else {
  offset -= deteleNotDigits(width);
}

slidesField.style.transform = `translate(-${offset}px)`;

if (slideIndex == 1) {
  slideIndex =  slides.length;
} else {
  slideIndex--;
}

addZero();

binding();


dots.forEach(dot => {
  dot.addEventListener('click', (e) => {
      const slideTo = e.target.getAttribute('data-slide-to');

      slideIndex = slideTo;
      offset = deteleNotDigits(width) * (slideTo - 1);

      slidesField.style.transform = `translateX(-${offset}px)`;

      addZero();

      binding();
  });
});

});

}

export default slider;