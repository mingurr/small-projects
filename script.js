customElements.whenDefined("dotlottie-wc").then(() => {
  const letter = document.getElementById("letter");
  const btn = document.getElementById("playBtn");

  const h1 = document.querySelector(".title");

  let player = null;

  btn.addEventListener("click", () => {
    player = player || letter.dotLottie;

    player.stop?.();
    player.play();

    h1.textContent = "I Love You, Rodrigo!";
  });
});

const isMobile = window.matchMedia("(max-width: 768px)").matches;

if (isMobile) {
  const noBtn = document.querySelector(".noBtn");

  let activated = false;

  const activateFixedAtCurrentPos = () => {
    const r = noBtn.getBoundingClientRect();
    noBtn.style.position = "fixed";
    noBtn.style.left = `${r.left}px`;
    noBtn.style.top = `${r.top}px`;
    noBtn.style.zIndex = "10";
    activated = true;
  };

  const moveFar = () => {
    const r = noBtn.getBoundingClientRect();
    const pad = 12;

    const maxX = window.innerWidth - r.width - pad;
    const maxY = window.innerHeight - r.height - pad;

    const currentX = r.left;
    const currentY = r.top;

    const targetLeftHalf = currentX > window.innerWidth / 2;
    const targetTopHalf = currentY > window.innerHeight / 2;

    const xMin = targetLeftHalf ? pad : window.innerWidth / 2;
    const xMax = targetLeftHalf ? window.innerWidth / 2 : maxX;

    const yMin = targetTopHalf ? pad : window.innerHeight / 2;
    const yMax = targetTopHalf ? window.innerHeight / 2 : maxY;

    const x = xMin + Math.random() * (xMax - xMin);
    const y = yMin + Math.random() * (yMax - yMin);

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
  };

  noBtn.addEventListener("pointerdown", (e) => {
    e.preventDefault();

    if (!activated) activateFixedAtCurrentPos();

    moveFar();
  });
}
