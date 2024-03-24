let btn = document.querySelector(".float-button");

btn.addEventListener("click", (e) => {
  if (e.target) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});
