//section6 - 탭 컨트롤
// const tabItem = document.querySelectorAll('.tab-container__item');
// const tabContent = document.querySelectorAll('.content-container__content');

// tabItem.forEach((item) => {
//   item.addEventListener('click', tabHandler);
// });

// function tabHandler(item) {
//   const tabTarget = item.currentTarget;
//   const target = tabTarget.dataset.tab;
//   tabItem.forEach((title) => {
//     title.classList.remove('active');
//   });
//   tabContent.forEach((target) => {
//     target.classList.remove('target');
//   });
//   document.querySelector('#' + target).classList.add('target');
//   tabTarget.classList.add('active');
// }

const tabList = document.querySelectorAll('.tabWrap .list li');
const contents = document.querySelectorAll('.works_img .tabCont');
let activeCont = '';

for (let i = 0; i < tabList.length; i++) {
  tabList[i].querySelector('.tabBtn').addEventListener('click', function (e) {
    e.preventDefault();
    for (let j = 0; j < tabList.length; j++) {
      tabList[j].classList.remove('active');
      contents[j].style.display = 'none';
    }
    this.parentNode.classList.add('active');
    activeCont = this.getAttribute('href');
    document.querySelector(activeCont).style.display = 'block';
  });
}
