import { setupLinkEvents, setupSearchToggle } from "./eventHandlers.js";
import { setupProgressBar } from "./progressBar.js";
import { setupScrollHandler } from "./scrollHandler.js";

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

document.addEventListener("DOMContentLoaded", () => {
  setupLinkEvents(linkUrlList);
  setupSearchToggle();
  setupScrollHandler();
  setupProgressBar();
});
