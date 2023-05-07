const video = document.querySelector("video");
const main = document.querySelector("main");
const skipButton = document.querySelector(".skip-button");

main.style.display = "none";
skipButton.style.display = "none";

setTimeout(() => {
  skipButton.style.display = "block";
}, 2000);

skipButton.addEventListener("click", function () {
  video.style.display = "none";
  skipButton.style.display = "none";
  main.style.display = "block";
});

video.addEventListener("ended", function () {
  video.style.display = "none";
  skipButton.style.display = "none";
  main.style.display = "block";
});
