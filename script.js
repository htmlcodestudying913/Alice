function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function playAudio() {
  var audio = document.getElementById("music");
  audio.play();
}

window.addEventListener('click', function() {
  setInterval(playAudio, 3000); // Adjust the interval (in milliseconds) as needed
});