document.addEventListener("DOMContentLoaded", (event) => {
  function toggleMenu() {
    const $navMenu = document.getElementById("nav__menu");
    if ($navMenu) {
      $navMenu.classList.toggle("show");
    } else {
      console.error("要素 #nav__menu が見つかりません");
    }
  }
  function handleFloatingButton() {
    const $floatingButton = document.getElementById("floating-button");
    $floatingButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        // behavior: "smooth",
      });
    });
  }

  function init() {
    const $navToggle = document.getElementById("nav__toggle");
    if ($navToggle) {
      $navToggle.addEventListener("click", () => {
        // Menu Toggle
        toggleMenu();
      });
    } else {
      console.error("要素 #nav__toggle が見つかりません");
    }

    const $navLinkList = document.querySelectorAll(".nav__link ");
    $navLinkList.forEach((el) => el.addEventListener("click", toggleMenu));
  }

  handleFloatingButton();

  init();
});

const options = {
  threshold: 0.8,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const sectionId = entry.target.id;
    if (entry.isIntersecting) {
      document
        .querySelector(`.nav__link[href*=${sectionId}]`)
        .classList.add("active-link");

      const $items = document.querySelectorAll(
        `.nav__link:not([href*=${sectionId}])`
      );
      $items.forEach((el) => el.classList.remove("active-link"));
    }
  });
}, options);

const $sectionList = document.querySelectorAll("section");
$sectionList.forEach((el) => observer.observe(el));
//observer.observe($workSection);

const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 200,
});
scrollReveal.reveal(".home__data, .about__img, .skills__text");

scrollReveal.reveal(".home__img, .about__data, .skills__img", { delay: 400 });
scrollReveal.reveal(".skills__data, .work__link , .contact__input", {
  interval: 200,
});
scrollReveal.reveal(".contact__button", { delay: 800 });

const typeit = new TypeIt("#typeit", {
  speed: 80,
  startDelay: 1000,
  waitUntilVisible: true,
});

typeit.type(" HELLO ! <br/>");
typeit
  .type(' <strong class="home__title-color">I AM </strong>')
  .delete(4, { delay: 300 });
typeit.type('<strong class="home__title-color"> ’m APACHE</strong>!!').go();
