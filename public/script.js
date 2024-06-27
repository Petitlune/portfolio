//Portfolio color change
const body = document.querySelector("body");
const wrap = document.querySelector(".wrap");
const colorChangeList = document.querySelectorAll(".colors");
const colorTextChangeList = document.querySelectorAll(".colorstext");
const colorSet = document.querySelector(".color-setting");
const colorBox = document.querySelector(".color-select-box");
const colorBtn = document.querySelectorAll(".select-color");
const projectBox = document.querySelectorAll(".modalScreenInner");
const exBox = document.querySelectorAll(".ex-box");

const colorArray = ["337ab7", "8dc572", "f0ad4e", "be6464"];

colorSet.addEventListener("click", () => {
  colorBox.classList.toggle("active");
});

wrap.addEventListener("click", (e) => {
  if (e.target !== colorSet) {
    colorBox.classList.remove("active");
  }
});

colorBtn.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    colorChangeList.forEach((item) => {
      item.style.background = `#${colorArray[i]}`;
    });
    exBox.forEach((it) => {
      it.style.borderColor = `#${colorArray[i]}`;
    });
    projectBox.forEach((it) => {
      it.style.borderColor = `#${colorArray[i]}`;
    });
    colorTextChangeList.forEach((item) => {
      item.style.color = `#${colorArray[i]}`;
    });
    colorBox.classList.remove("active");
  });
});

//weather API
let weatherTem = document.querySelector(".temp");
let weatherImg = document.querySelector(".weatherImg");
let weatherDesc = document.querySelector(".weather-desc");
let kel;
let cel;

const weatherDescription = [
  {
    Clear: "맑음",
    Clouds: "구름 많음",
    Haze: "안개",
    Rain: "비 내림",
    Snow: "눈 내림",
  },
];

const weather = () => {
  const weatherAPI =
    " https://api.openweathermap.org/data/2.5/weather?lat=37.4966645&lon=127.0629804&appid=8831f40327d3a39171fe604f814e8560";
  fetch(weatherAPI)
    .then((res) => res.json())
    .then((data) => {
      let currentWeather = data.weather[0].main;
      kel = data.main.temp;
      cel = `${(kel - 273.15).toFixed(1)}℃`;
      weatherTem.innerText = cel;
      weatherImg.src = `./img/${data.weather[0].main}.png`;
      weatherDesc.innerText = weatherDescription[0][currentWeather];
    });
};
weather();
//home-section

const imageBg = document.querySelector(".images");
const images = document.querySelectorAll(".image");
const imageMoveBox = document.querySelector(".profile");
let profileWidth = document.querySelector(".profile").offsetWidth;
let titleWidth = document.querySelector(".title").offsetWidth;
let marginLeft = (window.innerWidth - titleWidth - profileWidth) / 2;
let globalIndex = 0;
let last = { x: 0, y: 0 };
let isThrottled = false;

const activate = (image, x, y) => {
  image.style.left = `${x}px`;
  image.style.top = `${y}px`;
  image.style.zIndex = globalIndex;
  image.dataset.status = "active";
  last = { x, y };
};

const handleOnMove = (e) => {
  if (isThrottled) return;
  isThrottled = true;
  const lead = images[globalIndex % images.length];
  activate(
    lead,
    e.clientX - marginLeft - titleWidth,
    e.clientY - imageMoveBox.offsetTop
  );
  if (lead.dataset.index === images.length - 1) {
    globalIndex = 0;
  } else {
    globalIndex++;
  }

  imageBg.style.background = "rgba(0,0,0,0.3)";
  setTimeout(() => {
    isThrottled = false;
  }, 100);
};

const inactivate = () => {
  images.forEach((image) => {
    image.dataset.status = "inactive";
  });
  imageBg.style.background = "rgba(0,0,0,0)";
};
const addImageEvent = () => {
  imageMoveBox.addEventListener("mousemove", handleOnMove);
};

const updateDimensions = () => {
  profileWidth = document.querySelector(".profile").offsetWidth;
  titleWidth = document.querySelector(".title").offsetWidth;
  marginLeft = (window.innerWidth - titleWidth - profileWidth) / 2;
};

window.addEventListener("resize", updateDimensions);
imageMoveBox.addEventListener("mouseenter", addImageEvent);
imageMoveBox.addEventListener("mouseleave", inactivate);
//skill-section
const dewDrop = document.querySelector(".ani-dew");
const skillDescription = document.querySelectorAll(".skill-desc");

dewDrop.addEventListener("click", () => {
  dewDrop.classList.toggle("active");
  skillDescription.forEach((item) => {
    item.classList.toggle("active");
  });
});

//project-section
const modalList = document.querySelectorAll(".modalList");
const projectSection = document.querySelector(".project");
const modalScreen = document.querySelectorAll(".modalScreen");
const modalCloseBtn = document.querySelectorAll(".modalCloseBtn");
const modalBg = document.querySelectorAll(".modalback");

modalList.forEach((item, i) => {
  item.addEventListener("click", () => {
    modalScreen[i].style.display = "flex";
    modalBg[i].style.display = "flex";
    body.style.overflowY = "hidden";
  });
  modalCloseBtn[i].addEventListener("click", () => {
    modalScreen[i].style.display = "none";
    modalBg[i].style.display = "none";
    body.style.overflowY = "auto";
  });
});

//scrollTo event
const navMenu = document.querySelectorAll(".gnb li");
const sections = document.querySelectorAll(".section");
const goToTop = document.querySelector(".gotoTop");

navMenu.forEach((menu, i) => {
  menu.addEventListener("click", () => {
    window.scrollTo({
      top: sections[i].offsetTop - 60,
      behavior: "smooth",
    });
  });
});

goToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// example-section

const iframURL = [
  "https://flex-hompage-petit.web.app",
  "https://grid-hompage-petit.web.app",
  "https://css-animation-petit.web.app",
  "https://css-animation02-petit.web.app",
  "https://css-animation01-petit.web.app",
  "https://css-project02-petit.web.app",
  "https://calendar-petit.web.app",
  "https://accordion-ui-petit.web.app",
  "https://filter-petit.web.app",
  "https://loginform-petit.web.app",
  "https://matching-member-petit.web.app",
  "https://mobile-wedding-petit.web.app",
  "https://react-shoppingmall-petit.web.app",
];

const examModal = document.querySelectorAll(".ex-box-wrap li");
const modalFull = document.querySelector(".modal-full");
const modalClose = document.querySelector(" .modal-close-btn ");
const modalView = document.querySelector("#ex-modal iframe");
const pageURL = document.querySelector(".pageURL");

examModal.forEach((exam, i) => {
  exam.addEventListener("click", () => {
    modalFull.style.display = "flex";
    modalView.src = iframURL[i];
    body.style.overflowY = "hidden";
    pageURL.href = iframURL[i];
  });
});

modalClose.addEventListener("click", () => {
  modalFull.style.display = "none";
  body.style.overflowY = "auto";
});

// 메뉴 클릭시 active 되면 li 갯수 다시 가져옴 li마지막 index에 도달하면 다시 0으로 재할당
// windeow 사이즈 줄어들 때 left 값도 같이 변경되게끔 width값 재할당

const exList = document.querySelectorAll(".ex-menu li span");
const exContents = document.querySelectorAll(".ex-box-wrap");

let currentIndex = 0;

exList.forEach((li, i) => {
  li.addEventListener("click", () => {
    exList.forEach((li, j) => {
      li.classList.remove("active");
      exContents[j].classList.remove("active");
    });

    li.classList.add("active");
    exContents[i].classList.add("active");
    currentIndex = 0;
    updateSlideWidth();
    updateButtons();
  });
});

// 슬라이드 기능
const slideBtn = document.querySelectorAll(".slide-button button");
let slideWidth;
let slideWrap;
let slideContent;

function updateSlideWidth() {
  slideWidth = document.querySelector(".ex-box").clientWidth;
  slideWrap = document.querySelector(".ex-box-wrap.active");
  slideContent = document.querySelectorAll(".ex-box-wrap.active li");
  slideMargin = window.innerWidth * 0.038;
  slideWrap.style.left = "0px";
}

window.addEventListener("resize", updateSlideWidth);

slideBtn[0].addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slideContent.length - 1;
  }
  slideWrap.style.left = `-${currentIndex * (slideWidth - slideMargin)}px`;
  updateButtons();
});

slideBtn[1].addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= slideContent.length) {
    currentIndex = 0;
  }
  slideWrap.style.left = `-${currentIndex * (slideWidth - slideMargin)}px`;
  updateButtons();
});

function updateButtons() {
  if (currentIndex === 0) {
    slideBtn[0].disabled = true;
    slideBtn[0].classList.add("active");
  } else {
    slideBtn[0].disabled = false;
    slideBtn[0].classList.remove("active");
  }

  if (currentIndex === slideContent.length - 1) {
    slideBtn[1].disabled = true;
    slideBtn[1].classList.add("active");
  } else {
    slideBtn[1].disabled = false;
    slideBtn[1].classList.remove("active");
  }
}
updateSlideWidth();
updateButtons();

//email-copy

document.querySelector(".email").addEventListener("click", function () {
  const email = "kmf112@gmail.com";

  const creatInput = document.createElement("input");
  creatInput.value = email;
  document.body.appendChild(creatInput);

  creatInput.select();
  creatInput.setSelectionRange(0, 99999);

  document.body.removeChild(creatInput);

  alert(`${email} 복사되었습니다.`);
});

//toggle-btn

const btn = document.querySelector(".toggle-btn");
const gnb = document.querySelector(".gnb");
const gnbList = document.querySelectorAll(".gnb li");
if (window.innerWidth <= 1024) {
  gnbList.forEach((li) => {
    li.classList.add("colorstext");
  });
}

function addColorstextClass() {
  colorBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (window.innerWidth > 1024) {
        gnbList.forEach((li) => {
          li.style.color = "#fff";
        });
      }
    });
  });
}

function resizeDoc() {
  gnbList.forEach((li, i) => {
    if (window.innerWidth > 1024) {
      li.style.color = "#fff";
    } else {
      li.style.color = "#337ab7";
    }
  });
}
btn.addEventListener("click", () => {
  gnb.classList.toggle("active");
  btn.classList.toggle("active");
  gnbList.forEach((li) => {
    li.classList.toggle("active");
  });
});

addColorstextClass();
resizeDoc();

window.addEventListener("resize", () => {
  addColorstextClass();
  resizeDoc();
});
