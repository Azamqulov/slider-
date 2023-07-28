const slider = document.querySelector('.slider')
const img = document.querySelectorAll('img')
const dots = document.querySelectorAll('.dots')

const prev = document.querySelector('#btn1')
const next = document.querySelector('#btn2')

let count = 0;
let dotIndex = 0;
let timer = null;

slider.addEventListener('mousemove', () => {
  clearTimeout(timer);
});  

slider.addEventListener('mouseleave', () => {
  clearTimeout(timer);
  autoplay();
});


function autoplay() {
  timer = setTimeout(nextSlide, 2000)
}

prev.addEventListener('click', prevSlide)
next.addEventListener('click', nextSlide)

function RemoveActive() {
  for (let i = 0; i < img.length; i++) {
    img[i].classList.remove('active')
    dots[i].classList.remove('active')
  }
}

dots.forEach(function (dot, index) {
  dot.addEventListener('click', () => {
    dotIndex = index
    RemoveActive();

    dot.classList.add('active')
    img[dotIndex].classList.add('active')
    autoplay();
  })
})

function nextSlide() {
  RemoveActive()

  count++;
  if (count === img.length) {
    count = 0;
  }
  img[count].classList.add('active');
  dots[count].classList.add('active')
  autoplay()
}

function prevSlide() {
  RemoveActive();

  if (count === 0) {
    count = img.length;
  }
  count--;
  img[count].classList.add('active');
  dots[count].classList.add('active');
  autoplay()
}