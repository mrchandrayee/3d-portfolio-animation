# 3D Portfolio Animation — Runnable Project

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/3d-portfolio-animation/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

Recreated from the supplied 15.17-second, 540 × 960 screen recording.

## What is visible in the video
- Heading: **3D Portfolio Animation**
- A 3D book / portfolio cover for **Nilesh Mhatre**
- Cover subtitle: **Creative Developer & Designer**
- A cover prompt to click and open the book
- Inside spreads titled **About Me**, **My Projects**, **Experience**, and **Let's Connect**
- A final **Thank You** page
- Dark editor panel with CSS for `.front::before, .back::before` and `.back`

## CSS transcribed from the screen

```css
.front::before, .back::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--spine-shadow);
  pointer-events: none;
  border-radius: inherit;
}

.back {
  transform: rotateY(180deg);
  border-radius: 12px 0 0 12px;
  background-image: linear-gradient(-90deg,
    rgba(0,0,0,0.05) 0%,
    rgba(0,0,0,0) 10%);
}
```

The CSS above preserves the readable declarations and values shown in the recording. The rest of the original HTML, CSS, JavaScript, page copy and assets are not fully visible in the screen recording. The project therefore recreates the visible book design and page-turn behavior; biography and project descriptions are illustrative replacement copy, not a byte-for-byte extraction of hidden source.

## Features in this runnable recreation
- 3D page-turn animation
- Cover, About / Projects, Experience / Connect and Thank You spreads
- Next / Previous buttons and keyboard arrow navigation
- Responsive layout
- Copy-visible-CSS button
- No external packages or build step

## Run
Extract the ZIP and open `index.html` in a modern browser.

## Files
- `index.html`
- `style.css`
- `script.js`
- `README.md`

Note: This is a front-end portfolio demo. Email and social links are placeholders; replace them with real profile details before publishing.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
