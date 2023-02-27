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

//section8 - 마우스오버 이미지
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
