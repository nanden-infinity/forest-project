// const video = document.getElementById('video');
// const temperatura = document.getElementById('temperatura');
// const tempo = document.getElementById('tempo');
// const dia = document.getElementById('dia');

// const random = Math.floor(Math.random() * 10) + 20;
// temperatura.innerText = `${random}º`;
// tempo.innerText = random < 25 ? `🌧️ ${random + 5}%` : `🌤️`;

// const date = new Date();
// dia.innerText = date
//   .toLocaleDateString('pt-BR', {
//     weekday: 'long',
//   })
//   .replace('-feira', '');

// video.src = random < 25 ? `./img/video_chuva.mp4` : `./img/video_sol.mp4`;
const hero = document.querySelector(".hero");
const header = document.querySelector("header");
const mobileButton = document.getElementById("mobile-button");
const mobileMenu = document.getElementById("mobile-menu");
const random = Math.floor(Math.random() * 10) + 20;
const tempo = document.getElementById("tempo");
const dia = document.getElementById("dia");
const video = document.querySelector("#video");
const temperatura = document.getElementById("temperatura");
const date = new Date();
dia.innerText = date
  .toLocaleString("pt-pt", {
    weekday: "long",
  })
  .replace("-feira", "");
temperatura.innerText = `${random}°`;
tempo.innerText = random < 25 ? `🌧️ ${random + 5}%` : `🌤️`;
video.src = random < 25 ? `./img/video_chuva.mp4` : `./img/video_sol.mp4`;
mobileButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  mobileMenu.classList.toggle("flex");
});

mobileMenu.addEventListener("click", () => {
  mobileMenu.classList.add("hidden");
  setTimeout(() => mobileMenu.classList.remove("flex"), Math.random() * 2);
});

// const options = {
//   root: null,
//   rootMargin: '-80px',
//   threshold: 0.1,
// };
// const mutation = function (entries) {
//   const [entrie] = entries;
//   const isIntersecting = entrie.isIntersecting;
//   if (!isIntersecting) {
//     header.classList.add(
//       'fixed',
//       'w-full',
//       'bg-verde-900',
//       'left-0',
//       '!top-0',
//       '!z-99',
//       'right-0',
//     );
//     console.log(header);
//   }
// };
// const observer = new IntersectionObserver(mutation, options);

// observer.observe(hero);
