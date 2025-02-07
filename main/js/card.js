export const carCardCreat = (carCatgory, space) => {
  carCatgory.forEach((v, i) => {
    const carList = document.createElement("ul");
    carList.classList = "electronicCarList_box";
    carList.innerHTML = `
  <div class="Detail_button_list">
    <article class="Detail_button">
      <img src="img/${carCatgory[i].smallimg}.png" alt="" />
      <div class="item_box_name">${carCatgory[i].name}</div>
      <div class="item_box_price">${carCatgory[i].price} 만원~</div>
    </article>
  
    <li class="item_detail">
      <div class="item_detail_list">
        <div class="button_box"><button class="back_page_button">×</button></div>
        <div class="detail_inner">
          <div class="item_detail_explanation">
            <div class="item_detail_box_name">
              ${carCatgory[i].detailtitle}
            </div>
            <div class="item_detail_box_title">${carCatgory[i].name}</div>
            <div class="Read_more">자세히 보기 〉</div>
            <div class="information">
              <span class="informationList"
                ><p class="informationName">가격</p>
                <p class="informationText">
                  ${carCatgory[i].price} 만원~
                </p></span
              >
              <span class="bar">|</span>
              <span class="informationList"
                ><p class="informationName">연비</p>
                <p class="informationText">
                  ${carCatgory[i].fuelEfficiency}
                </p></span
              >
              <span class="bar">|</span>
              <span class="informationList"
                ><p class="informationName">승차 인원</p>
                <p class="informationText">${carCatgory[i].personnel}</p></span
              >
              <span class="bar">|</span>
              <span class="informationList"
                ><p class="informationName">배기량</p>
                <p class="informationText">
                  ${carCatgory[i].displacement}
                </p></span
              >
            </div>
          </div>
          <div class="item_detail_img">
            <img src="img/${carCatgory[i].bigimg}.png" alt="" />
          </div>
        </div>
        <div class="buy_detail_button_box">
          <button id="buy1" class="buy">구매 상담 신청</button
          ><button id="buy2" class="buy">내차 만들기</button>
        </div>
      </div>
    </li>
  </div>
        `;

    space.appendChild(carList);
  });
};
