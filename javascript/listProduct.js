let a = [
  {
    imgLeft: "img/bepdientu1.png",
    imgRight: "img/mayhut.png",
    titleCate1: "Bếp điện từ",
    titleCate2: "Máy hút bụi",
  },
  {
    imgLeft: "img/chaurua1.png",
    imgRight: "img/voinuoc1.png",
    titleCate1: "Chậu rửa",
    titleCate2: "Vòi nước",
  },
  {
    imgLeft: "img/lonuong1.png",
    imgRight: "img/lovisong1.png",
    titleCate1: "Lò nướng",
    titleCate2: "Lò vi sóng",
  },
  {
    imgLeft: "img/lohap1.png",
    imgRight: "img/maygiatsay1.png",
    titleCate1: "Lò hấp",
    titleCate2: "Máy sấy - Máy giặt",
  },
  {
    imgLeft: "img/tulanh.png",
    imgRight: "img/maysaychen1.png",
    titleCate1: "Tủ lạnh",
    titleCate2: "Máy sấy chén",
  },
  {
    imgLeft: "img/mayruachen.png",
    imgRight: "img/tubaoquanruou.png",
    titleCate1: "Máy rửa chén",
    titleCate2: "Tủ bảo quản rượu",
  },
  {
    imgLeft: "img/bepgas.png",
    imgRight: "img/MCF-LX12.png",
    titleCate1: "Bếp gas",
    titleCate2: "Máy pha cà phê",
  },
  {
    imgLeft: "img/thiebilocnuoc.png",
    imgRight: "img/dungcunhabep1.png",
    titleCate1: "Thiết bị lọc nước",
    titleCate2: "Dụng cụ nhà bếp",
  },
];

let containerProduct = document.querySelector(".container-product");
let itemCate = document.querySelector(".item-cate");
let listCate = a.map(function (element, index) {
  let widthItemCate1;
  let widthItemCate2;
  if (index % 2 == 0) {
    widthItemCate2 = 60;
    widthItemCate1 = 37;
  } else {
    widthItemCate2 = 40;
    widthItemCate1 = 57;
  }
  return `
      <div class="row-cate" dataset={${index}}>
        <div class="item-cate" style="width:${widthItemCate2}%" >
          <div class="pic-cate" >
            <div
              class="pig-img"
              style="background-image: url('${element.imgLeft}')"
            >
              <img src="${element.imgLeft}" alt="" />
            </div>
          </div>
          <div class="title-cate">${element.titleCate1}</div>
          <a href="#" class="product-cate-link"></a>
        </div>
        <div class="item-cate" style="width:${widthItemCate1}% ">
          <div class="pic-cate" >
            <div
              class="pig-img"
              style="background-image: url('${element.imgRight}')"
            >
              <img src="${element.imgRight}" alt="" />
            </div>
          </div>
          <div class="title-cate">${element.titleCate2}</div>
          <a href="#" class="product-cate-link"></a>
        </div>
      </div>`;
});

containerProduct.innerHTML = listCate.join("");
let rowCate = document.querySelectorAll(".row-cate");

for (let i = 0; i < rowCate.length; i++) {
  window.addEventListener("scroll", function () {
    const el = rowCate[i];
    const rect = el.getBoundingClientRect();
    if (rect.y - window.innerHeight < -100) {
      el.classList.add("animate");
    }
    /*
      if (interView(rowCate[i])) {
        console.log("abc");
      } else {
        console.log("bcb");
      }
      */
  });
}
