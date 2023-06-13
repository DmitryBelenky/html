window.addEventListener("load", () => {
  for (let i of document.querySelectorAll(".ukraine img, .portugal img, .germany img")) {
    i.onclick = () => i.classList.toggle("full");
  }
});