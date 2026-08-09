"use strict";

/* ==========================================
   TESTIMONIAL ELEMENTS
========================================== */

const testimonials =
    document.querySelectorAll(".testimonial");

const prevBtn =
    document.querySelector(".slider-btn.prev");

const nextBtn =
    document.querySelector(".slider-btn.next");

const dots =
    document.querySelectorAll(".testimonial-dots .dot");


/* ==========================================
   STATE
========================================== */

let currentTestimonial = 0;


/* ==========================================
   SHOW TESTIMONIAL
========================================== */

function showTestimonial(index) {

    /* Handle looping */

    if (index >= testimonials.length) {
        currentTestimonial = 0;
    }

    else if (index < 0) {
        currentTestimonial =
            testimonials.length - 1;
    }

    else {
        currentTestimonial = index;
    }


    /* Remove active from all testimonials */

    testimonials.forEach(testimonial => {

        testimonial.classList.remove("active");

    });


    /* Add active to current testimonial */

    testimonials[currentTestimonial]
        .classList.add("active");


    /* Update dots */

    dots.forEach(dot => {

        dot.classList.remove("active");

    });


    if (dots[currentTestimonial]) {

        dots[currentTestimonial]
            .classList.add("active");

    }

}


/* ==========================================
   NEXT TESTIMONIAL
========================================== */

function nextTestimonial() {

    showTestimonial(
        currentTestimonial + 1
    );

}


/* ==========================================
   PREVIOUS TESTIMONIAL
========================================== */

function previousTestimonial() {

    showTestimonial(
        currentTestimonial - 1
    );

}


/* ==========================================
   BUTTON EVENTS
========================================== */

nextBtn.addEventListener("click", () => {

    nextTestimonial();

    restartSlideshow();

});


prevBtn.addEventListener("click", () => {

    previousTestimonial();

    restartSlideshow();

});


/* ==========================================
   DOT EVENTS
========================================== */

dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        showTestimonial(index);

        restartSlideshow();

    });

});


/* ==========================================
   INITIALIZATION
========================================== */

showTestimonial(0);



/* ==========================================
   AUTOMATIC SLIDESHOW
========================================== */

let testimonialInterval;

function startSlideshow() {

    testimonialInterval = setInterval(() => {

        showTestimonial(
            currentTestimonial + 1
        );

    }, 5000);

}


function restartSlideshow() {

    clearInterval(testimonialInterval);

    startSlideshow();

}

/* ==========================================
   INITIALIZATION
========================================== */

showTestimonial(0);

startSlideshow();