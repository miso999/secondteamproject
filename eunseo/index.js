// click 하면 링크주소로 이동(a태그)
const linkUrlList = [
  { id: "header_img", url: "https://www.hyundai.com/kr/ko/e/" },
  { id: "model", url: "https://www.hyundai.com/kr/ko/e/all-vehicles" },
  {
    id: "shop",
    url: "https://shop.hyundai.com/section/welcome?utm_source=hyundai_d_com&utm_medium=affiliates&utm_campaign=gnb",
  },
  { id: "genesis", url: "https://www.genesis.com/kr/ko/main.html" },
  { id: "casper", url: "https://casper.hyundai.com/" },
  {
    id: "trendyHyundai",
    url: "https://www.hyundai.com/kr/ko/e/service-membership/ev/hi-ev",
  },
];

[...linkUrlList].forEach((v) => {
  const value = document.querySelector("#" + v.id);
  value.addEventListener("click", () => {
    open(v.url);
  });
});

// 검색창 누르면 나오게 하기
const searchIcon = document.querySelector("#searchIcon");
const search__wrap = document.querySelector(".search__wrap");
const navs__wrap = document.querySelector(".navs__wrap");

searchIcon.addEventListener("click", () => {
  if (search__wrap.style.display == "none") {
    search__wrap.style.setProperty("display", "block");
    navs__wrap.style.setProperty("display", "none");
  } else {
    search__wrap.style.setProperty("display", "none");
    navs__wrap.style.setProperty("display", "block");
  }
});

const close_btn = document.querySelector("#close_btn");
close_btn.addEventListener("click", () => {
  search__wrap.style.setProperty("display", "none");
  navs__wrap.style.setProperty("display", "block");
});

// language 와 user => hover
// 스크롤 내리면 header 위로 올라감
// 스크롤 올리면 header 아래로 내려옴
// 스크롤 내리면 바가 채워짐
// 스크롤 올리면 바가 다시 위로 감
