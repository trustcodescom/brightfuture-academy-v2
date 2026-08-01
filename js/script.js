"use strict";

/* ==========================================
   DOM ELEMENTS
========================================== */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");

/* ==========================================
   FUNCTIONS
========================================== */

function updateMenuIcon() {

    const icon = menuBtn.querySelector("i");
    const isOpen = navLinks.classList.contains("active");

    icon.classList.toggle("fa-bars", !isOpen);
    icon.classList.toggle("fa-xmark", isOpen);

}

function toggleMenu() {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuBtn.setAttribute("aria-expanded", isOpen);

    updateMenuIcon();

}

function closeMenu() {

    navLinks.classList.remove("active");
    menuBtn.setAttribute("aria-expanded", "false");

    updateMenuIcon();

}

/* ==========================================
   EVENT LISTENERS
========================================== */

// Toggle mobile menu
menuBtn.addEventListener("click", toggleMenu);

// Close menu when a navigation link is clicked
navItems.forEach(link => {

    link.addEventListener("click", closeMenu);

});

// Close menu when clicking outside the navbar
document.addEventListener("click", (event) => {

    const isMenuOpen = navLinks.classList.contains("active");
    const clickedInsideNavbar = event.target.closest(".navbar");

    if (isMenuOpen && !clickedInsideNavbar) {

        closeMenu();

    }

});

// Close menu when Escape key is pressed
document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeMenu();

    }

});

/* ==========================================
   INITIALIZATION
========================================== */

updateMenuIcon();