import gsap from "gsap";

export function notify(formEl) {
  const notificationEl = formEl.querySelector(".subscribe-notification-js");
  notificationEl.style.display = "block";

  gsap.to(notificationEl, { duration: 0.3, opacity: 1 });

  setTimeout(() => {
    gsap.to(notificationEl, {
      duration: 0.3,
      opacity: 0,
      onComplete: () => {
        notificationEl.style.display = "none";
      },
    });
  }, 2000);
}
