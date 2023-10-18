const video = document.querySelector("video");
const header = document.querySelector("header");
const main = document.querySelector("main");
const skipButton = document.querySelector(".skip-button");

header.style.display = "none";
main.style.display = "none";
skipButton.style.display = "none";

setTimeout(() => {
  skipButton.style.display = "block";
}, 700);

skipButton.addEventListener("click", function () {
  video.style.display = "none";
  skipButton.style.display = "none";
  header.style.display = "block";
  main.style.display = "block";
});

video.addEventListener("ended", function () {
  video.style.display = "none";
  skipButton.style.display = "none";
  header.style.display = "block";
  main.style.display = "block";
});
