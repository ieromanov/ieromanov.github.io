export function initScrollListener() {
  const headerEl = document.querySelector(".header");
  const navigationEl = document.querySelector("#navigation-js");
  const navEls = document.querySelectorAll(".nav-item-js");
  const navigationOffsetTop =
    navigationEl !== null ? navigationEl.offsetTop : 0;

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
        section.offsetTop - 120 <= fromTop &&
        section.offsetTop + section.offsetHeight - 120 > fromTop
      ) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  function onScroll() {
    updateProgressBar();
    if (navigationEl !== null) {
      stickyNavigation();
      markActiveSection();
    }
  }

  return onScroll;
}
