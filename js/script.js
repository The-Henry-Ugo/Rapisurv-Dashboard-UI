function arrow() {
  // document.querySelector(".up_arrow").style.transform = "rotate(180deg)";
  document.querySelector(".sticky_div").style.height = "70px";
  document.querySelector(".sticky_div").style.transition = "cubic-bezier(0.175, 0.885, 0.32, 1.275)";
  document.querySelector(".up_arrow").style.display = "block";
  document.querySelector(".down_arrow").style.display = "none";
}

function arrow2() {
  // document.querySelector(".up_arrow").style.transform = "rotate(180deg)";
  document.querySelector(".sticky_div").style.height = "auto";
  document.querySelector(".sticky_div").style.paddingBottom = "50px";
  document.querySelector(".up_arrow").style.display = "none";
  document.querySelector(".down_arrow").style.display = "block";
}

// Hamburger Animation
$("#toggle").click(function () {
  $(this).toggleClass("active");
});

