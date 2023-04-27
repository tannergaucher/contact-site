const video = document.querySelector("video");
const main = document.querySelector("main");

main.style.display = "none";

video.addEventListener("ended", function () {
  video.style.display = "none";
  main.style.display = "block";
});
