import { moveList } from "./array.js";

export const moveListFunc = () => {
  [...moveList].forEach((v) => {
    const clickId = v.clickId;
    const moveId = v.moveId;
    clickId.addEventListener("click", (e) =>
      moveId.scrollIntoView({ behavior: "smooth", block: "start" })
    );
  });
};
