(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{tjUo:function(e,t,o){"use strict";function n(){var t=document.querySelector(".header"),n=document.querySelector("#navigation-js"),c=document.querySelectorAll(".nav-item-js"),a=n.offsetTop;return function(){var e,o;e=(document.body.scrollTop||document.documentElement.scrollTop)/(document.documentElement.scrollHeight-document.documentElement.clientHeight)*100,document.getElementById("progress-js").style.width=e+"%",window.pageYOffset>a?(n.classList.add("sticky"),t.classList.add("margin")):(n.classList.remove("sticky"),t.classList.remove("margin")),o=window.scrollY,c.forEach(function(e){var t=document.querySelector(e.hash);t.offsetTop-120<=o&&t.offsetTop+t.offsetHeight-120>o?e.classList.add("active"):e.classList.remove("active")})}}o.r(t);var c=o("z/o8");var a="subscribe-form__input",s="".concat(a,"--error");function i(e){e.preventDefault();var t=e.currentTarget,o=t.querySelector(".".concat(a));/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(o.value)?(e=o.value,fetch("https://squareconsulting.net/api/signup/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e})}).then(function(){var e;o.value="",(e=t.querySelector(".subscribe-notification-js")).style.display="block",c.a.to(e,{duration:.3,opacity:1}),setTimeout(function(){c.a.to(e,{duration:.3,opacity:0,onComplete:function(){e.style.display="none"}})},2e3)})):o.classList.add(s)}window.addEventListener("DOMContentLoaded",function(){var e=document.querySelectorAll(".".concat("subscribe-form"));Array.from(e).forEach(function(e){e.addEventListener("submit",i)}),window.addEventListener("scroll",n()),document.addEventListener("input",function(e){e=e.target;e.classList.contains(s)&&e.classList.remove(s)})})}},[["tjUo",1,2]]]);
//# sourceMappingURL=app.de3949195820a9ff899c.js.map