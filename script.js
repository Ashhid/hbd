document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("confettiButton");
  const container = document.querySelector(".container");

  button.addEventListener("click", function () {
    createFirework();
  });

  function createFirework() {
    const firework = document.createElement("div");
    firework.className = "firework";
    const xPosition = Math.random() * container.clientWidth;
    firework.style.left = `${xPosition}px`;
    container.appendChild(firework);

    setTimeout(() => {
      firework.remove();
    }, 1000);
  }
});
