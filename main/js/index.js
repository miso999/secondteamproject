import { setupProgressBar } from "../../eunseo/progressBar.js";

import {
  electronicCarArr,
  linkUrlList,
  NcarArr,
  passengerCarArr,
  suvArr,
} from "./array.js";
import { Buycar } from "./buyCar.js";
import { carCardCreat } from "./card.js";
import { closedetail } from "./close.js";
import { setupLinkEvents, setupSearchToggle } from "./eventHandlers.js";
import { footeropen } from "./footerlistopen.js";
import { moveListFunc } from "./move.js";
import { setupScrollHandler } from "./scrollHandler.js";

carCardCreat(electronicCarArr, electronicCarList1);
carCardCreat(NcarArr, Ncar);
carCardCreat(passengerCarArr, passengerCar);
carCardCreat(suvArr, SUV);
closedetail();
footeropen();

setupLinkEvents(linkUrlList);
setupSearchToggle();
setupScrollHandler();
setupProgressBar();
Buycar();
moveListFunc();
