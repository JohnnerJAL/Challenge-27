const left = document.querySelector(".left");
const right = document.querySelector(".right");

left.addEventListener("mouseover", () => {
  left.classList.remove("hover-right");
  right.classList.remove("hover-right");

  left.classList.add("hover-left");
  right.classList.add("hover-left");
});

right.addEventListener("mouseover", () => {
  left.classList.remove("hover-left");
  right.classList.remove("hover-left");

  left.classList.add("hover-right");
  right.classList.add("hover-right");
})