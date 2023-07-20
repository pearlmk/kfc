const hideBtn = document.querySelector("#periRedOne");
const showBtn = document.querySelector("#periOrderNumberOne");

hideBtn.addEventListener("click", () => {
  hideBtn.style.display = "none";
  showBtn.style.display = "block";
});
