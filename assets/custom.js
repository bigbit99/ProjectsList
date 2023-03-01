//section6 - 탭 컨트롤
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

//section6 - 모달
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
      console.log('오픈!');
      index++;
    };
    closeBtns[num].onclick = function (e) {
      e.preventDefault();
      modals[num].style.visibility = 'hidden';
      modals[num].style.top = 'calc(100vh - 64px)';
      body.style.overflow = 'unset';
      console.log('클로즈!');
    };
  };
}

for (let i = 0; i < openBtns.length; i++) {
  funcs[i] = Modal(i);
}
for (let j = 0; j < openBtns.length; j++) {
  funcs[j]();
}

//section6 - 마우스오버 이벤트
// const worksImgArea = document.querySelector(
//   '.sectionSix .works_img .tabCont .tabImgBox'
// );
// const cursorPoint = document.getElementById('cursorPoint');

// worksImgArea.addEventListener('mousemove', function (e) {
//   let x = e.offsetX;
//   let y = e.offsetY;
//   cursorPoint.style.left = x + 'px';
//   cursorPoint.style.top = y + 'px';
//   cursorPoint.style.visibility = 'visible';
// });

//🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
//section8 - 마우스오버 이벤트
const tabmenu = document.querySelector('.sectionEight ul li.tabmenu');
const cursorOne = document.getElementById('circleOne');
tabmenu.addEventListener('mousemove', function (e) {
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
