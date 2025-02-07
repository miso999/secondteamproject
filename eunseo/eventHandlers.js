import { toggleDisplay } from "./utils.js";

export const setupLinkEvents = (linkUrlList) => {
  [...linkUrlList].forEach((v) => {
    document
      .querySelector("#" + v.id)
      ?.addEventListener("click", () => open(v.url));
  });
};

export const setupSearchToggle = () => {
  const searchIcon = document.querySelector("#searchIcon");
  const searchWrap = document.querySelector(".search__wrap");
  const navsWrap = document.querySelector(".navs__wrap");
  const closeBtn = document.querySelector("#close_btn");

  searchIcon.addEventListener("click", () => {
    const isHidden = searchWrap.style.display === "none";
    toggleDisplay(searchWrap, isHidden);
    toggleDisplay(navsWrap, !isHidden);
  });

  closeBtn.addEventListener("click", () => {
    toggleDisplay(searchWrap, false);
    toggleDisplay(navsWrap, true);
  });
};
