"use strict";

/* ======= BACK TO TOP ======= */

document.addEventListener("DOMContentLoaded", () => {

    const backToTop =
        document.querySelector("#backToTop");


    /* ====== CHECK ELEMENT ======= */

    if (!backToTop) {
        return;
    }


    /* ======= SHOW / HIDE BUTTON ======== */

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    });


    /* ======= SCROLL TO TOP ======== */

    backToTop.addEventListener("click", (event) => {

        event.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

});