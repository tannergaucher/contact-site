const video = document.querySelector("video");
const main = document.querySelector("main");

video.addEventListener("play", function () {
  main.style.display = "none";
});

video.addEventListener("ended", function () {
  video.style.display = "none";
  main.style.display = "block";
});
