const spreads = [
  {
    label: "Cover",
    left: '<div class="empty-page"></div>',
    right: '<article class="cover page-content"><div class="cover-glow"></div><p class="cover-kicker">PORTFOLIO</p><h2>Nilesh Mhatre</h2><p>Creative Developer &amp; Designer</p><span class="open-hint">Click to open book <b>↗</b></span></article>'
  },
  {
    label: "About · Projects",
    left: '<div class="page-content sheet-page"><h3>About Me</h3><p>I enjoy bringing ideas to life through thoughtful design and interactive web experiences. I focus on building clean, responsive and engaging digital products.</p><div class="small-title">Skills</div><p>Tools and technologies I work with:</p><div class="skill-list"><span>HTML</span><span>CSS</span><span>JavaScript</span><span>React</span><span>UI Design</span></div></div>',
    right: '<div class="page-content sheet-page"><h3>My Projects</h3><div class="project-card"><b>E-Commerce App</b><span>A full-stack web store with a smooth shopping experience.</span></div><div class="project-card"><b>3D WebGL Engine</b><span>Interactive browser-based 3D visuals and motion.</span></div></div>'
  },
  {
    label: "Experience · Connect",
    left: '<div class="page-content sheet-page"><h3>Experience</h3><div class="small-title">Senior Frontend Developer</div><p>TechWave Digital · 2021–2024</p><div class="small-title">Web Developer</div><p>Creative Studio · 2020–2021</p><p>Building responsive interfaces, reusable components and delightful interactions.</p></div>',
    right: '<div class="page-content sheet-page"><h3>Let’s Connect</h3><p>I am currently available for freelance work and creative collaborations.</p><a class="connect-link" href="mailto:hello@example.com">Email Me · hello@example.com</a><a class="connect-link" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">Follow Me · LinkedIn / Twitter</a><a class="download" href="data:text/plain,Portfolio%20Resume%20Demo" download="resume-demo.txt">Download Resume</a></div>'
  },
  {
    label: "Thank You",
    left: '<div class="page-content sheet-page"><h3>Thank You</h3><p>Thanks for taking the time to explore my portfolio.</p><p>Let’s make something meaningful together.</p></div>',
    right: '<article class="thanks page-content"><h2>Thank You</h2><p>For exploring my portfolio</p></article>'
  }
];

let current = 0;
let busy = false;
const leftPage = document.getElementById("leftPage");
const rightPage = document.getElementById("rightPage");
const flipSheet = document.getElementById("flipSheet");
const flipFront = document.getElementById("flipFront");
const flipBack = document.getElementById("flipBack");
const pageCount = document.getElementById("pageCount");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const toast = document.getElementById("toast");

function renderSpread(index) {
  leftPage.innerHTML = spreads[index].left;
  rightPage.innerHTML = spreads[index].right;
  pageCount.textContent = `${spreads[index].label} · ${index + 1} / ${spreads.length}`;
  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === spreads.length - 1;
  document.getElementById("prevBottom").disabled = index === 0;
  document.getElementById("nextBottom").disabled = index === spreads.length - 1;
}

function turnPage(direction) {
  if (busy) return;
  const target = current + direction;
  if (target < 0 || target >= spreads.length) return;
  busy = true;
  if (direction > 0) {
    flipFront.innerHTML = spreads[current].right;
    flipBack.innerHTML = spreads[target].left;
    flipSheet.style.left = "50%";
    flipSheet.style.right = "auto";
    flipSheet.style.transformOrigin = "left center";
    flipSheet.classList.remove("reverse");
    flipSheet.classList.remove("flipped");
    requestAnimationFrame(() => flipSheet.classList.add("flipped"));
  } else {
    flipFront.innerHTML = spreads[current].left;
    flipBack.innerHTML = spreads[target].right;
    flipSheet.style.left = "0";
    flipSheet.style.right = "auto";
    flipSheet.style.transformOrigin = "right center";
    flipSheet.classList.add("reverse");
    flipSheet.classList.remove("flipped");
    requestAnimationFrame(() => flipSheet.classList.add("flipped"));
  }
  setTimeout(() => {
    current = target;
    renderSpread(current);
    flipSheet.classList.remove("flipped", "reverse");
    flipSheet.style.left = "50%";
    busy = false;
  }, 920);
}

prevBtn.addEventListener("click", () => turnPage(-1));
nextBtn.addEventListener("click", () => turnPage(1));
document.getElementById("prevBottom").addEventListener("click", () => turnPage(-1));
document.getElementById("nextBottom").addEventListener("click", () => turnPage(1));
document.getElementById("book").addEventListener("click", (event) => {
  if (event.target.closest("a, button")) return;
  turnPage(1);
});
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") turnPage(1);
  if (event.key === "ArrowLeft") turnPage(-1);
});

document.getElementById("copyCss").addEventListener("click", async () => {
  const code = document.getElementById("cssSnippet").textContent;
  try {
    await navigator.clipboard.writeText(code);
    notify("Visible CSS copied");
  } catch {
    notify("Select the CSS text and copy manually");
  }
});

function notify(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(notify.timer);
  notify.timer = setTimeout(() => toast.classList.remove("show"), 1700);
}

renderSpread(current);
