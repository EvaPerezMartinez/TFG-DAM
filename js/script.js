// ======= Menú responsive (funciona en todas las páginas) =======
document.querySelectorAll(".navbar-toggle").forEach(toggle => {
  toggle.addEventListener("click", () => {
    const menu = toggle.parentElement.querySelector(".navbar-menu");
    if (menu) {
      menu.classList.toggle("active");
    }
  });


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
  // ===== Popup Formulario =====
  const modal = document.getElementById("popupForm");
  const closeBtn = document.getElementById("cerrarPopup");

  document.querySelectorAll(".abrirFormulario").forEach(btn => {
    btn.addEventListener("click", () => {
      modal.style.display = "block";

      const iframe = modal.querySelector("iframe");
      if (iframe) {
        // recalcular altura cuando cargue
        const adjust = () => {
          try {
            const doc = iframe.contentWindow.document;
            const h = Math.min(
              doc.documentElement.scrollHeight,
              window.innerHeight * 0.9 // nunca más alto que el 90% de la ventana
            );
            iframe.style.height = h + "px";
          } catch (e) {
            // si hay problema de mismo origen, mantenemos 75vh
          }
        };
        iframe.addEventListener("load", adjust, { once: true });
        // por si ya estaba cargado
        if (iframe.contentWindow?.document?.readyState === "complete") adjust();
      } 
    });
  });

  closeBtn?.addEventListener("click", () => (modal.style.display = "none"));

  window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });

  // Cerrar modal si se hace click en enlace de Políticas
  document.addEventListener("click", function(e) {
    if (e.target.classList.contains("link-politicas")) {
      // Cierra el popup
      const modal = document.getElementById("popupForm");
      if (modal) modal.style.display = "none";
    }
  });


});
