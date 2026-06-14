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
