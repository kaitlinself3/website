document.addEventListener("DOMContentLoaded", () => {

  //  BUTTON
  const btn = document.createElement("button");
  const header = document.querySelector(".site-header");

  if (header) {
    header.appendChild(btn);
  }

  // LOAD THEME
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
    btn.textContent = "☀️";
  } else {
    btn.textContent = "🌙";
  }

  // TOGGLE
  btn.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");

    const isDark = document.documentElement.classList.contains("dark");
    btn.textContent = isDark ? "☀️" : "🌙";

    localStorage.setItem("theme", isDark ? "dark" : "light");
  });

  // ANIMATION
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  document.querySelectorAll(".animate").forEach(el => observer.observe(el));

  // ACTIVE LINK
  const links = document.querySelectorAll(".site-nav a");
  const current = window.location.pathname.split("/").pop() || "index.html";

  links.forEach(link => {
    if (link.getAttribute("href") === current) {
      link.classList.add("active");
    }
  });

});