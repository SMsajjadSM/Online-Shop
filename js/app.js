let slideIndex = 1;
let remainingTime = 70000;

function setTime() {
  if (remainingTime == 0) return;
  let h = Math.floor(remainingTime / 3600);
  let m = Math.floor((remainingTime % 3600) / 60);
  let s = (remainingTime % 3600) % 60;
  document.querySelector("#hour").innerHTML = h;
  document.querySelector("#min").innerHTM = m;
  document.querySelector("#sec").innerHTML = s;
}
setInterval(() => {
  remainingTime -= 1;
  setTime();
}, 1000);

function setSlide(input, index) {
  slideIndex = index;
  let item = document.querySelector(`#${input}`);
  let slides = [...document.querySelector(".slides").children];
  slides.forEach((element) => {
    element.classList.add("hidden");
  });
  item.classList.remove("hidden");
}

setInterval(() => {
  slideIndex += 1;
  if (slideIndex == 4) {
    slideIndex = 1;
  }

  setSlide(`slide${slideIndex}`, slideIndex);
}, 4000);
