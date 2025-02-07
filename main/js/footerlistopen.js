export const footeropen = () => {
  const lower_box = document.querySelector(".lower_box");
  lower_box.addEventListener("click", () => {
    const lower_box_list = document.querySelector(".lower_box_list");
    lower_box_list.style.display =
      lower_box_list.style.display == "block" ? "none" : "block";
  });
};
