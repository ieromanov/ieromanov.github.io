import "./sass/main.scss";

function initScrollListener() {
  const headerEl = document.querySelector(".header");
  const navigationEl = document.querySelector("#navigation-js");
  const navEls = document.querySelectorAll(".nav-item-js");
  const navigationOffsetTop = navigationEl.offsetTop;

  function updateProgressBar() {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("progress-js").style.width = scrolled + "%";
  }

  function stickyNavigation() {
    if (window.pageYOffset > navigationOffsetTop) {
      navigationEl.classList.add("sticky");
      headerEl.classList.add("margin");
    } else {
      navigationEl.classList.remove("sticky");
      headerEl.classList.remove("margin");
    }
  }

  function markActiveSection() {
    let fromTop = window.scrollY;

    navEls.forEach((link) => {
      let section = document.querySelector(link.hash);

      if (
        section.offsetTop - 100 <= fromTop &&
        section.offsetTop + section.offsetHeight - 100 > fromTop
      ) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  function onScroll() {
    updateProgressBar();
    stickyNavigation();
    markActiveSection();
  }

  return onScroll;
}

function subscribeNotify() {
  const notificationEl = document.querySelector("#subscribe-notification-js");
  return () => {
    notificationEl.style.opacity = 1;

    setTimeout(() => {
      notificationEl.style.opacity = 0;
    }, 2000);
  };
}

function main() {
  const buttonEl = document.querySelector("#subscribe-submit-js");
  buttonEl.addEventListener("click", subscribeNotify());
  window.addEventListener("scroll", initScrollListener());
}

window.addEventListener("DOMContentLoaded", main);
