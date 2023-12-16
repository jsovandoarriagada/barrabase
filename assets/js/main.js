const faqs = document.querySelectorAll(".faq");

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const toggleMobileMenu = () => {
  document.querySelector(".nav__overlay").classList.toggle("active");
  document.querySelector(".burger").classList.toggle("open");
  document.querySelector(".nav__mobile").classList.toggle("active");
};

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});
