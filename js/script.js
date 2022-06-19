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


$(".heading-compose").click(function() {
  $(".side-two").css({
    "left": "0"
  });
});

$(".newMessage-back").click(function() {
  $(".side-two").css({
    "left": "-100%"
  });
});


$chat = $(".chat");
$profile = $(".user-profile");

/* ===================================
    Screen resize handler
====================================== */
const smallDevice = window.matchMedia("(max-width: 767px)");
const largeScreen = window.matchMedia("(max-width: 1199px)");
smallDevice.addEventListener("change", handleDeviceChange);
largeScreen.addEventListener("change", handleLargeScreenChange);

handleDeviceChange(smallDevice);
handleLargeScreenChange(largeScreen);

function handleDeviceChange(e) {
  if (e.matches) chatMobile();
  else chatDesktop();
}

function handleLargeScreenChange(e) {
  if (e.matches) profileToogleOnLarge();
  else profileExtraLarge();
}

function chatMobile() {
  $chat.addClass("chat--mobile");
}

function chatDesktop() {
  $chat.removeClass("chat--mobile");
}

function profileToogleOnLarge() {
  $profile.addClass("user-profile--large");
}

function profileExtraLarge() {
  $profile.removeClass("user-profile--large");
}

/* ===================================
    Events
====================================== */

$(".messaging-member").click(function () {
  $chat.fadeIn();
  $chat.addClass("chat--show");
});

$(".chat__previous").click(function () {
  $chat.removeClass("chat--show");
});

$(".chat__details").click(function () {
  $profile.fadeIn();
  $profile.addClass("user-profile--show");
});

$(".user-profile__close").click(function () {
  $profile.removeClass("user-profile--show");
});

$(".messages-page__dark-mode-toogler").click(function () {
  $("body").toggleClass("dark-mode");
});

