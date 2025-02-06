export const setupProgressBar = () => {
  const progressBarInner = document.createElement("div");
  progressBarInner.id = "progress-bar-inner";
  document.querySelector("#progress-bar").appendChild(progressBarInner);

  window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const docHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    progressBarInner.style.width = `${(scrollTop / docHeight) * 100}%`;
  });
};
