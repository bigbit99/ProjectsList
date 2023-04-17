//main photo slider
let imgIndex = 0;
let barIndex = 0;

const navBar = document.querySelector('nav');
const mainCont = document.getElementById('content');
const loaderWrap = document.querySelector('.loaderWrap');
const html = document.querySelector('html');

navBar.style.top = '-64px';
mainCont.style.top = 'calc(100vh)';
window.onload = function () {
  setTimeout(() => {
    loaderWrap.style.opacity = '0';
    window.scrollTo(0, 0);
  }, 500);
  setTimeout(() => {
    navBar.style.top = '0px';
  }, 1000);
  setTimeout(() => {
    mainCont.style.top = '64px';
  }, 2000);
  setTimeout(() => {
    slideShow();
    progressBar();
  }, 3000);
};

function slideShow() {
  let i;
  let x = document.getElementsByClassName('imgHanbitBox');
  for (i = 0; i < x.length; i++) {
    x[i].classList.remove('active');
  }
  imgIndex++;
  if (imgIndex > x.length) {
    imgIndex = 1;
  }
  x[imgIndex - 1].classList.add('active');
  setTimeout(slideShow, 4000);
}

//progressBar
function progressBar() {
  let i;
  let x = document.getElementsByClassName('barInner');
  let j = document.querySelectorAll('.leftSpan span');
  for (i = 0; i < x.length; i++) {
    x[i].classList.remove('activeBar');
    j[i].classList.add('out');
    j[i].classList.remove('activeSpan');
  }
  barIndex++;
  if (barIndex > x.length) {
    barIndex = 1;
  }
  x[barIndex - 1].classList.add('activeBar');
  j[barIndex - 1].classList.add('remove');
  j[barIndex - 1].classList.remove('out');
  setTimeout(progressBar, 4000);
}

//section6 - tab control
const tabList = document.querySelectorAll('.tabWrap .list li');
const contents = document.querySelectorAll('.works_img .tabCont');
let activeCont = '';

for (let i = 0; i < tabList.length; i++) {
  tabList[i].querySelector('.tabBtn').addEventListener('click', function (e) {
    e.preventDefault();
    for (let j = 0; j < tabList.length; j++) {
      tabList[j].classList.remove('active');
      contents[j].classList.remove('activeView');
      // contents[j].style.display = 'none';
    }
    this.parentNode.classList.add('active');
    activeCont = this.getAttribute('href');
    document.querySelector(activeCont).classList.add('activeView');
    // document.querySelector(activeCont).style.display = 'block';
  });
}

//section6 - modal
let body = document.getElementById('Body');
let modals = document.getElementsByClassName('modal');
let openBtns = document.getElementsByClassName('openBtn');
let closeBtns = document.getElementsByClassName('closeBtn');
let funcs = [];
let index = 1;
function Modal(num) {
  return function () {
    // modals[num].style.display = 'block';
    // modals[num].style.zIndex = '100';
    // body.style.overflow = 'hidden';
    openBtns[num].onclick = function (e) {
      // e.preventDefault();
      modals[num].style.visibility = 'visible';
      modals[num].style.top = '0';
      modals[num].style.zIndex = '50';
      body.style.overflow = 'hidden';
      index++;
    };
    closeBtns[num].onclick = function (e) {
      e.preventDefault();
      modals[num].style.visibility = 'hidden';
      modals[num].style.top = 'calc(100vh - 64px)';
      body.style.overflow = 'unset';
    };
  };
}

for (let i = 0; i < openBtns.length; i++) {
  funcs[i] = Modal(i);
}
for (let j = 0; j < openBtns.length; j++) {
  funcs[j]();
}

//section8 - mouse move event
const weather = document.querySelector('.sectionEight ul li.weather');
const cursorOne = document.getElementById('circleOne');
weather.addEventListener('mousemove', function (e) {
  let x = e.offsetX;
  let y = e.offsetY / 2;
  cursorOne.style.left = x + 'px';
  cursorOne.style.top = y + 'px';
});

const loading = document.querySelector('.sectionEight ul li.loading');
const cursorTwo = document.getElementById('circleTwo');
loading.addEventListener('mousemove', function (e) {
  let x = e.offsetX;
  let y = e.offsetY / 2;
  cursorTwo.style.left = x + 'px';
  cursorTwo.style.top = y + 'px';
});

const kraken = document.querySelector('.sectionEight ul li.kraken');
const cursorThree = document.getElementById('circleThree');
kraken.addEventListener('mousemove', function (e) {
  let x = e.offsetX;
  let y = e.offsetY / 2;
  cursorThree.style.left = x + 'px';
  cursorThree.style.top = y + 'px';
});

const apple = document.querySelector('.sectionEight ul li.apple');
const circleFour = document.getElementById('circleFour');
apple.addEventListener('mousemove', function (e) {
  let x = e.offsetX;
  let y = e.offsetY / 2;
  circleFour.style.left = x + 'px';
  circleFour.style.top = y + 'px';
});

const clock = document.querySelector('.sectionEight ul li.clock');
const circleFive = document.getElementById('circleFive');
clock.addEventListener('mousemove', function (e) {
  let x = e.offsetX;
  let y = e.offsetY / 2;
  circleFive.style.left = x + 'px';
  circleFive.style.top = y + 'px';
});

const cube = document.querySelector('.sectionEight ul li.cube');
const circleSix = document.getElementById('circleSix');
cube.addEventListener('mousemove', function (e) {
  let x = e.offsetX;
  let y = e.offsetY / 2;
  circleSix.style.left = x + 'px';
  circleSix.style.top = y + 'px';
});

//section8 - weather(날씨 API)
const API_KEY = '09f52fdbc4d95c862e79b3691e828f6b';

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector('#weather span:first-child');
      const city = document.querySelector('#weather span:last-child');
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

// section8 - loading bar animation
function chargeLoading() {
  let loadBar = document.querySelectorAll('.loadBar');

  for (let i = 0; i < loadBar.length; i++) {
    setTimeout(function () {
      loadBar[i].style.display = 'block';
    }, (i + 1) * 500);
  }
  for (let j = 0; j < loadBar.length; j++) {
    loadBar[j].style.display = 'none';
  }
}
chargeLoading();
setInterval(chargeLoading, 5000);

//section8 - clock
const pointClock = document.querySelector('h2#clock');

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  pointClock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);

//section9 - year
const thisYear = document.querySelector('.thisYear');
const getYear = () => {
  thisYear.innerText = `${new Date().getFullYear()}`;
};
getYear();
