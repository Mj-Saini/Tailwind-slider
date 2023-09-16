const flowerButton = document.querySelector(".flower-button");

flowerButton.addEventListener("mouseenter", function () {
  createFlower();
});

function createFlower() {
  const flower = document.createElement("div");
  flower.className = "flower";
  const randomX = Math.random() * window.innerWidth;
  flower.style.left = `${randomX}px`;
  document.body.appendChild(flower);

  flower.addEventListener("animationend", function () {
    document.body.removeChild(flower);
  });
}
