let scroll = document.querySelector(".gallery");
let backBtn = document.getElementById("back");
let nextBtn = document.getElementById("next");

scroll.addEventListener("while", (evt) => {
  evt.preventDefault();
  scroll.scrollLeft += evt.deltaX;
});

nextBtn.addEventListener("click", () => {
  scroll.style.scrollBehavior = "smooth";
  scroll.scrollLeft += 300;
});

backBtn.addEventListener("click", () => {
  scroll.style.scrollBehavior = "smooth";
  scroll.scrollLeft -= 300;
});
