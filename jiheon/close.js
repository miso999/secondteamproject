export const closedetail = () => {
  document.querySelectorAll(".Detail_button").forEach((v, i) => {
    v.addEventListener("click", () => {
      document.querySelectorAll(".item_detail").forEach((v) => {
        v.style.display = "none";
      });

      document.querySelectorAll(".Detail_button_list").forEach((v) => {
        v.style.marginBottom = "0px";
      });

      const detailElement = document.querySelectorAll(".item_detail")[i];
      detailElement.style.display = "flex";
      detailElement.scrollIntoView({ behavior: "smooth", block: "start" });

      const detailElement2 = document.querySelectorAll(".Detail_button_list")[
        i
      ];
      detailElement2.style.marginBottom = "480px";
    });
  });

  document.querySelectorAll(".back_page_button").forEach((v, i) => {
    v.addEventListener("click", (x) => {
      x.stopPropagation();
      const detailElement = document.querySelectorAll(".item_detail")[i];
      const detailElement2 = document.querySelectorAll(".Detail_button_list")[
        i
      ];
      detailElement.style.display = "none";
      detailElement2.style.marginBottom = "0px";
    });
  });
};

export const closedetail2 = () => {
  const details = document.querySelectorAll(".item_detail");
  const buttonLists = document.querySelectorAll(".Detail_button_list");

  document.querySelectorAll(".Detail_button").forEach((button, i) =>
    button.addEventListener("click", () => {
      details.forEach((detail) => (detail.style.display = "none"));
      buttonLists.forEach((list) => (list.style.marginBottom = "0px"));

      details[i].style.display = "flex";
      details[i].scrollIntoView({ behavior: "smooth", block: "start" });
      buttonLists[i].style.marginBottom = "480px";
    })
  );

  document.querySelectorAll(".back_page_button").forEach((button, i) =>
    button.addEventListener("click", (e) => {
      e.stopPropagation();
      details[i].style.display = "none";
      buttonLists[i].style.marginBottom = "0px";
    })
  );
};

document.querySelectorAll(".class").forEach;
