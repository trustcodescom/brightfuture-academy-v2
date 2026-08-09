"use strict";

/* ==========================================
   APPLICATION MODAL
========================================== */

const applicationModal =
    document.querySelector("#applicationModal");

const applicationOverlay =
    document.querySelector(".application-overlay");

const applicationClose =
    document.querySelector(".application-close");

const applicationTriggers =
    document.querySelectorAll(".open-application");


/* ==========================================
   OPEN MODAL
========================================== */

function openApplicationModal(){

    applicationModal.classList.add("active");

    applicationModal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.style.overflow = "hidden";

    applicationClose.focus();
}


/* ==========================================
   CLOSE MODAL
========================================== */

function closeApplicationModal(){

    applicationModal.classList.remove("active");

    applicationModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow = "";
}


/* ==========================================
   EVENT LISTENERS
========================================== */

applicationTriggers.forEach(button => {

    button.addEventListener("click", (event) => {

        event.preventDefault();

        openApplicationModal();

    });

});


applicationClose.addEventListener(
    "click",
    closeApplicationModal
);


applicationOverlay.addEventListener(
    "click",
    closeApplicationModal
);


/* ==========================================
   ESCAPE KEY
========================================== */

document.addEventListener("keydown", (event) => {

    if (
        event.key === "Escape" &&
        applicationModal.classList.contains("active")
    ) {

        closeApplicationModal();

    }

});