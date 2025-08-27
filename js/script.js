// Menú responsive
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".navbar-toggle");
  const navMenu = document.querySelector(".navbar ul");

  if (toggle) {
    toggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }

  // Botón scroll arriba
  const scrollBtn = document.getElementById("scrollTopBtn");

  window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  };

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // FAQ acordeón
  const faqQuestions = document.querySelectorAll(".faq-question");
  faqQuestions.forEach(q => {
    q.addEventListener("click", () => {
      const answer = q.nextElementSibling;
      answer.style.display = answer.style.display === "block" ? "none" : "block";
    });
  });
});
