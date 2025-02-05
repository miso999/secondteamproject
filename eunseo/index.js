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
  {
    id: "en",
    url: "https://www.hyundai.com/kr/en/catalog_price/hydrogen_ev",
  },
  {
    id: "cn",
    url: "https://www.hyundai.com/kr/en/catalog_price/hydrogen_ev",
  },
  {
    id: "worldWide",
    url: "https://www.hyundai.com/worldwide/ko#utm_source=hmc-kr&utm_medium=referral&utm_campaign=top_util",
  },
  {
    id: "global",
    url: "https://trucknbus.hyundai.com/global/en/",
  },
  {
    id: "perLogin",
    url: "https://idpconnect-kr.hyundai.com/auth/api/v2/user/oauth2/authorize?client_id=2b6b3d2d-5ccc-497f-8e8b-e9b2d7582097&redirect_uri=https%3A%2F%2Fwww.hyundai.com%2Fkr%2Fko%2Fccspcallback.html%3Fhmgid%3D2&response_type=code&scope=&state=login&connector_client_id=hmgid1.0-2b6b3d2d-5ccc-497f-8e8b-e9b2d7582097&ui_locales=&connector_scope=&connector_session_key=dca02db6-f693-48b9-bd02-a26c1988cd1d",
  },
  {
    id: "corLogin",
    url: "https://www.hyundai.com/kr/ko/corporation-login",
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

// 스크롤 내리면 header 위로 올라감
// 스크롤 내리면 바가 채워짐
// 스크롤 올리면 header 아래로 내려옴
// 스크롤 올리면 바가 다시 위로 감
