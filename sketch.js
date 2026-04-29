const links = document.querySelectorAll(".site-nav a");
const current = window.location.pathname.split("/").pop() || "index.html";

links.forEach((link) => {
  if (link.getAttribute("href") === current) {
    link.classList.add("active");
  }
});

