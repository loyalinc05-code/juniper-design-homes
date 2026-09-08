const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => nav.classList.remove("open"));
  });
}

const year = document.getElementById("year");
if (year) year.textContent = String(new Date().getFullYear());

const contactBtn = document.getElementById("contact-toggle");
const contactInfo = document.getElementById("contact-info");
if (contactBtn && contactInfo) {
  contactBtn.addEventListener("click", () => {
    const open = contactInfo.hasAttribute("hidden") === false;
    if (open) {
      contactInfo.hidden = true;
      contactBtn.setAttribute("aria-expanded", "false");
    } else {
      contactInfo.hidden = false;
      contactBtn.setAttribute("aria-expanded", "true");
    }
  });
}
