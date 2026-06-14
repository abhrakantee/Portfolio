// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Reveal animation for skills
const skills = document.querySelectorAll(".skill");
window.addEventListener("scroll", () => {
  skills.forEach(skill => {
    const position = skill.getBoundingClientRect().top;
    if (position < window.innerHeight - 50) {
      skill.style.opacity = 1;
      skill.style.transform = "translateY(0)";
      skill.style.transition = "all 0.6s ease";
    }
  });
});
const cursor = document.querySelector('.cursor');

let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Smooth animation loop
function animate() {
  // Lerp (move a fraction closer each frame)
  cursorX += (mouseX - cursorX) * 0.15;
  cursorY += (mouseY - cursorY) * 0.15;

  cursor.style.left = cursorX + 'px';
  cursor.style.top = cursorY + 'px';

  requestAnimationFrame(animate);
}
animate();

// Click animation
document.addEventListener('mousedown', () => {
  cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
});

document.addEventListener('mouseup', () => {
  cursor.style.transform = 'translate(-50%, -50%) scale(1)';
});
