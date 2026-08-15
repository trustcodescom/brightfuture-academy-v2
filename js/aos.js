"use strict";

AOS.init({
    duration: 800,
    easing: "ease-out",
    once: true,
    offset: 100
});

window.addEventListener("load", () => {
    AOS.refresh();
});