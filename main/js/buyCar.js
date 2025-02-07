export const Buycar = () => {
  const a = document.querySelectorAll("#buy1").forEach((v) => {
    v.addEventListener("click", () => {
      window.location.href =
        "https://www.hyundai.com/kr/ko/e/vehicles/purchase-consult?from=model";
    });
  });
};
