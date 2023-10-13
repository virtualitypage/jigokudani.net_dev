let navToggle = document.querySelector(".nav__toggle");
let navWrapper = document.querySelector(".nav__wrapper");

navToggle.addEventListener("click", function () {
  if (navWrapper.classList.contains("active")) {
    this.setAttribute("aria-expanded", "false");
    this.setAttribute("aria-label", "menu");
    navWrapper.classList.remove("active");
  } else {
    navWrapper.classList.add("active");
    this.setAttribute("aria-label", "close menu");
    this.setAttribute("aria-expanded", "true");
    searchForm.classList.remove("active");
    searchToggle.classList.remove("active");
  }
});

let searchToggle = document.querySelector(".search__toggle");
let searchForm = document.querySelector(".search__form");

searchToggle.addEventListener("click", showSearch);

function showSearch() {
  searchForm.classList.toggle("active");
  searchToggle.classList.toggle("active");

  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "menu");
  navWrapper.classList.remove("active");

  if (searchToggle.classList.contains("active")) {
    searchToggle.setAttribute("aria-label", "Close search");
  } else {
    searchToggle.setAttribute("aria-label", "Open search");
  }
}

const signs = document.querySelectorAll('x-sign')
const randomIn = (min, max) => (
  Math.floor(Math.random() * (max - min + 1) + min)
)

const mixupInterval = el => {
  const ms = randomIn(2000, 4000)
  el.style.setProperty('--interval', `${ms}ms`)
}

signs.forEach(el => {
  mixupInterval(el)
  el.addEventListener('webkitAnimationIteration', () => {
    mixupInterval(el)
  })
})

function information() {
  let date = new Date();
  // alert(date.toLocaleDateString() + " 現在、最新情報はありません");
  // alert(date.toLocaleDateString() + " 現在、諸事情につきサイトの更新を停止しています" + '\n' + "サイトへの率直な意見を述べられるフォームを実装しました！");
  alert("「マップ」を修正しました。" + '\n' + "「立呑みコクレ」のページを更新しました。" + '\n' + "「天ぷらとお出汁 渉」のページを更新しました。" + '\n' + "「そよぎ庵」のページを更新しました。" + '\n' + "「move on」のページを更新しました。" + '\n' + "「地獄谷 串焼つーたん」のページを更新しました。");
}

function googleForm() {
  window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLScus2uKaA49bYkh8O_s9HtEL8Tr1ohcgqLVGkKVCR3bzgAZQA/viewform';
}

function notifications() {
  let date = new Date();
  alert(date.toLocaleDateString() + "現在、開発中につき閲覧不可");
}