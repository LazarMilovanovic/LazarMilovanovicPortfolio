const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");
const githubLogo = document.getElementById("github");
const gitHubCarouselLogo = document.getElementById("gitHubCarouselImg");
const changeThemeBtn = document.getElementById("themeToggle");
const typingEl = document.getElementById("typing-text");

const isDark = JSON.parse(localStorage.getItem("darkMode"));

if (isDark) {
  document.body.classList.add("dark");
  changeThemeBtn.textContent = "☀️";
  githubLogo.src = "images/logos/github-light.svg";
  gitHubCarouselLogo.src = "images/logos/github-light.svg";
}

changeThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const darkModeActive = document.body.classList.contains("dark");

  localStorage.setItem("darkMode", JSON.stringify(darkModeActive));

  if (darkModeActive) {
    changeThemeBtn.textContent = "☀️";
    githubLogo.src = "images/logos/github-light.svg";
    gitHubCarouselLogo.src = "images/logos/github-light.svg";
  } else {
    changeThemeBtn.textContent = "🌙";
    githubLogo.src = "images/logos/github-dark.svg";
    gitHubCarouselLogo.src = "images/logos/github-dark.svg";
  }
});

function setActiveLink() {
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;

  const index = Math.round(scrollPosition / windowHeight);

  navLinks.forEach((link) => link.classList.remove("active"));

  if (navLinks[index]) {
    navLinks[index].classList.add("active");
  }
}

window.addEventListener("scroll", setActiveLink);

setActiveLink();

const text = "I'm Frontend Developer";
let i = 0;
function type() {
  if (i < text.length) {
    typingEl.textContent += text[i];
    i++;
    setTimeout(type, 80);
  }
}
type();
