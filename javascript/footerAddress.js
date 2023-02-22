let Info = document.querySelector(".footer__info");
let info = [
  {
    headingInfo: "SHOWROOM TP.HỒ CHÍ MINH",
    mainAddress: "39 Nguyễn Cơ Thạch, Phường An Lợi Đông, TP.HCM",
    numberPhone: "(84.28) 7302 1168",
    numberFax: "(84.28) 3862 5727",
    email: "showroom-q2@malloca.com",
  },
  {
    headingInfo: "SHOWROOM Hà Nội",
    mainAddress: "Số 10, Chương Dương Độ, P.Chương Dương, Q.Hoàn Kiếm",
    numberPhone: "(024) 35376 288 - (024) 35376 419 - (024) 35376 299",
    numberFax: "(024) 627 51 134",
    email: "showroom-hn@malloca.com",
  },
  {
    headingInfo: "SHOWROOM Đà Nẵng",
    mainAddress: "451 Điện Biên Phủ, P Hòa Khê, Q. Thanh Khê",
    numberPhone: "(0236) 7303 268",
    numberFax: "023 636 927 67",
    email: "showroom-dn@malloca.com",
  },
];
let listInfo = info.map((item) => {
  return `
    <div class="footer__info__column">
      <h2>${item.headingInfo}</h2>
      <div class="footer__info__column__address">
        <div class="footer__info__column__address__row">
          <i class="fa-solid fa-location-dot"></i>
          <p>${item.mainAddress}</p>
        </div>
        <div class="footer__info__column__address__row">
          <i class="fa-solid fa-phone"></i>
          <p>${item.numberPhone}</p>
        </div>
        <div class="footer__info__column__address__row">
          <i class="fa-solid fa-fax"></i>
          <p>${item.numberFax}</p>
        </div>
        <div class="footer__info__column__address__row">
          <i class="fa-solid fa-envelope"></i>
          <p>${item.email}</p>
        </div>
      </div>
    </div>
  `;
});
Info.innerHTML = listInfo.join("");
const columnInfo = document.querySelectorAll(".footer__info__column");
window.addEventListener("scroll", function () {
  for (let i = 0; i < columnInfo.length; i++) {
    const el = columnInfo[i];
    const rect = el.getBoundingClientRect();
    if (rect.y - window.innerHeight < -100) {
      el.classList.add("animateUp");
    }
  }
});
