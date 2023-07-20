const clickToAddNum = document.querySelector("#periAddOne");
const clickToRemoveNum = document.querySelector("#periRemoveOne");
const Num = document.querySelector("#periNumberOne");
const h = document.querySelector("#periRedOne");
const s = document.querySelector("#periOrderNumberOne");

let x = 0;
$(document).ready(function () {
  $(clickToAddNum).click(function () {
    $(Num).text(++x);
  });
  $(clickToRemoveNum).click(function () {
    $(Num).text(--x);
    if (x <= 0) {
      $(h).css({"display":"block","margin-left":"3.6rem"});
      $(s).css("display", "none");
    }
  });
});
