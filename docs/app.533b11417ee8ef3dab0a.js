(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{tjUo:function(e,t,o){"use strict";function n(){var t=document.querySelector(".header"),n=document.querySelector("#navigation-js"),c=document.querySelectorAll(".nav-item-js"),s=n.offsetTop;return function(){var e,o;e=(document.body.scrollTop||document.documentElement.scrollTop)/(document.documentElement.scrollHeight-document.documentElement.clientHeight)*100,document.getElementById("progress-js").style.width=e+"%",window.pageYOffset>s?(n.classList.add("sticky"),t.classList.add("margin")):(n.classList.remove("sticky"),t.classList.remove("margin")),o=window.scrollY,c.forEach(function(e){var t=document.querySelector(e.hash);t.offsetTop-120<=o&&t.offsetTop+t.offsetHeight-120>o?e.classList.add("active"):e.classList.remove("active")})}}o.r(t);var c="subscribe-form__input",s="".concat(c,"--error");function a(){var e=document.querySelector("#subscribe-notification-js");e.style.opacity=1,setTimeout(function(){e.style.opacity=0},2e3)}function i(e){e.preventDefault();var t=e.currentTarget.querySelector(".".concat(c));/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(t.value)?(e=t.value,fetch("/api/signup",{method:"POST",body:JSON.stringify({email:e})}).then(a)):t.classList.add(s)}window.addEventListener("DOMContentLoaded",function(){var e=document.querySelectorAll(".".concat("subscribe-form"));Array.from(e).forEach(function(e){e.addEventListener("submit",i)}),window.addEventListener("scroll",n()),document.addEventListener("input",function(e){e=e.target;e.classList.contains(s)&&e.classList.remove(s)})})}},[["tjUo",1]]]);
//# sourceMappingURL=app.533b11417ee8ef3dab0a.js.map