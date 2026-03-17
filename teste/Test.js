const alvoX = window.innerWidth / 2;
const alvoY = window.innerHeight / 2;

function spawn() {
  const bola = document.createElement("div");

  bola.style.width = "20px";
  bola.style.height = "20px";
  bola.style.background = "purple";
  bola.style.borderRadius = "50%";
  bola.style.position = "absolute";

  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;

  bola.style.left = x + "px";
  bola.style.top = y + "px";

  document.body.appendChild(bola);

  // diferença até o alvo
  const dx = alvoX - x;
  const dy = alvoY - y;

  bola.animate(
    [
      { transform: "translate(0px, 0px)" },
      { transform: `translate(${dx}px, ${dy}px)` }
    ],
    {
      duration: 1000 + Math.random() * 2000,
      fill: "forwards"
    }
  );
}