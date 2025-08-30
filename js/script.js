// ======= Menú responsive =======
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("navbar-toggle");
  const menu = document.getElementById("navbar-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("active");
    });
  }

  // ======= Botón scroll arriba =======
  const scrollBtn = document.getElementById("scrollTopBtn");
  if (scrollBtn) {
    window.addEventListener("scroll", () => {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollBtn.style.display = "block";
      } else {
        scrollBtn.style.display = "none";
      }
    });

    scrollBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // ======= FAQ acordeón =======
  const faqQuestions = document.querySelectorAll(".faq-question");
  if (faqQuestions.length) {
    faqQuestions.forEach(q => {
      q.addEventListener("click", () => {
        const answer = q.nextElementSibling;
        if (!answer) return;
        answer.style.display = (answer.style.display === "block") ? "none" : "block";
      });
    });
  }

  // ======= Carrusel de reseñas (solo si existe en la página) =======
// ======= Carrusel de reseñas (solo con puntos) =======
const slides = document.querySelectorAll(".carousel-slide");
const dotsContainer = document.querySelector(".carousel-dots");

if (slides.length && dotsContainer) {
  let slideIndex = 0;

  // Crear puntos
  dotsContainer.innerHTML = "";
  let dots = [];

  slides.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.addEventListener("click", () => showSlide(i));
    dotsContainer.appendChild(dot);
    dots.push(dot);
  });

  function showSlide(n) {
    slides.forEach((s, i) => {
      s.classList.toggle("active", i === n);
      dots[i].classList.toggle("active", i === n);
    });
    slideIndex = n;
  }

  // Mostrar primer slide
  showSlide(0);
}


  // ======= Filtro del blog =======
  const filterButtons = document.querySelectorAll(".filter-btn");
  const posts = document.querySelectorAll(".blog-post");

  if (filterButtons.length && posts.length) {
    // Mostrar todo por defecto
    posts.forEach(p => p.style.display = "block");

    filterButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const category = btn.getAttribute("data-category");

        posts.forEach(post => {
          const match = (category === "all") || (post.dataset.category === category);
          post.style.display = match ? "block" : "none";
        });
      });
    });
  }
});
