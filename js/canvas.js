// canvas.js
const canvas = document.getElementById("roulete");
const ctx = canvas.getContext("2d");
const textarea = document.querySelector("#textarea");
const container = document.querySelector("#roulete-c");
const warning = document.querySelector("#warning");

const colors = ["#E11D48", "#0284C7", "#46dbb7"];

function resizeCanvas() {
  const containerWidth = container.clientWidth;

  if (window.innerWidth < 768) {
    // Pantallas pequeñas
    canvas.width = containerWidth;
    canvas.height = containerWidth;
    ctx.font = "16px Arial";
  } else if (window.innerWidth < 1024) {
    // Tablets
    canvas.width = 400; // Ajusta según el diseño
    canvas.height = 400;
    ctx.font = "18px Arial";
  } else {
    // Notebooks y mayores
    canvas.width = 500;
    canvas.height = 500;
    ctx.font = "20px Arial";
  }

  draw(); // Redibujar la ruleta
}
function draw() {
  let start = 0;

  const results = textarea.value.split("\n").filter((item) => item);
  const len = results.length;
  const deg = Math.PI * 2 * (100 / len / 100);

  if (len == 0) {
    warning.classList.remove("hidden");
    warning.classList.add("flex");
  } else {
    warning.classList.add("hidden");
  }
  results.forEach((result, i) => {
    ctx.fillStyle = colors[i % colors.length];
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, canvas.height / 2);
    ctx.arc(
      canvas.width / 2,
      canvas.height / 2,
      canvas.height / 2,
      start,
      start + deg
    );
    ctx.closePath();
    ctx.fill();

    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(start + deg / 2);
    ctx.fillStyle = "white";
    //ctx.font = "24px Arial"; // Aumenta el tamaño aquí
    ctx.textAlign = "center"; // Centra horizontalmente el texto
    ctx.textBaseline = "middle"; // Centra verticalmente el texto
    const text = result;

    // Cambiar la posición del texto
    ctx.fillText(text, canvas.height / 4, 0);
    ctx.restore();

    start += deg;
  });
}

textarea.addEventListener("input", draw);
window.addEventListener("resize", resizeCanvas);
resizeCanvas();
