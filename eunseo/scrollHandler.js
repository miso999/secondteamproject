export const setupScrollHandler = () => {
  let lastScrollTop = 0;
  const header = document.querySelector("#header");
  const navsWrap = document.querySelector(".navs__wrap");
  const searchWrap = document.querySelector(".search__wrap");

  window.addEventListener("scroll", () => {
    const currentScroll = window.screenY || document.documentElement.scrollTop;
    const isScrollingDown = currentScroll > lastScrollTop;

    header.style.transform = `translateY(${isScrollingDown ? "-100%" : "0%"})`;
    navsWrap.style.top = searchWrap.style.top = isScrollingDown
      ? "0px"
      : "80px";

    lastScrollTop = Math.max(currentScroll, 0);
  });
};
