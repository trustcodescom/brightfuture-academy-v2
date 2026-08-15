"use strict";

/* ====== LEGAL CONTENT ====== */

const legalContent = {

    terms: {

        title: "Terms of Service",

        content: `
            <h3>1. Acceptance of Terms</h3>

            <p>
                By accessing and using the BrightFuture Academy
                website, you agree to these Terms of Service.
            </p>


            <h3>2. Use of the Website</h3>

            <p>
                This website is provided to give information about
                BrightFuture Academy, its educational programs,
                admissions and related services.
            </p>


            <h3>3. Website Information</h3>

            <p>
                We make reasonable efforts to keep the information
                on this website accurate and up to date. However,
                information may change without prior notice.
            </p>


            <h3>4. Acceptable Use</h3>

            <p>
                You agree not to misuse the website, interfere with
                its operation, or use it for unlawful purposes.
            </p>
        `
    },


    privacy: {

        title: "Privacy Policy",

        content: `
            <h3>1. Information We Collect</h3>

            <p>
                BrightFuture Academy may collect information that
                you voluntarily provide when submitting enquiries,
                applications or other forms through the website.
            </p>


            <h3>2. How We Use Information</h3>

            <p>
                Information may be used to respond to enquiries,
                process applications and provide relevant
                information about the Academy.
            </p>


            <h3>3. Protection of Information</h3>

            <p>
                We take reasonable steps to protect personal
                information from unauthorized access, misuse or
                disclosure.
            </p>


            <h3>4. Third Parties</h3>

            <p>
                We do not sell your personal information to third
                parties.
            </p>
        `
    },


    cookies: {

        title: "Manage Cookies",

        content: `
            <h3>What Are Cookies?</h3>

            <p>
                Cookies are small pieces of information stored by
                your browser that can help websites remember
                preferences and improve your browsing experience.
            </p>


            <h3>How We Use Cookies</h3>

            <p>
                BrightFuture Academy may use cookies and similar
                technologies to help the website function properly
                and understand how visitors interact with it.
            </p>


            <h3>Managing Cookies</h3>

            <p>
                You can manage or disable cookies through the
                settings of your web browser.
            </p>
        `
    }

};


/* ====== DOM ELEMENTS ====== */

const legalModal =
    document.querySelector("#legalModal");

const legalOverlay =
    document.querySelector(".legal-overlay");

const legalClose =
    document.querySelector(".legal-close");

const legalLinks =
    document.querySelectorAll(".legal-link");

const legalModalTitle =
    document.querySelector("#legalModalTitle");

const legalModalBody =
    document.querySelector("#legalModalBody");


/* ====== OPEN LEGAL MODAL ====== */

function openLegalModal(legalId) {

    const legal = legalContent[legalId];

    if (!legal) {
        return;
    }

    legalModalTitle.textContent =
        legal.title;

    legalModalBody.innerHTML =
        legal.content;

    legalModal.classList.add("active");

    legalModal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.style.overflow = "hidden";

    document.body.classList.add("modal-open");

    legalClose.focus();
}


/* ====== CLOSE LEGAL MODAL ====== */

function closeLegalModal() {

    legalModal.classList.remove("active");

    legalModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow = "";

    document.body.classList.remove("modal-open");
}


/* ====== LEGAL LINKS ====== */

legalLinks.forEach(link => {

    link.addEventListener("click", event => {

        event.preventDefault();

        const legalId =
            link.dataset.legal;

        openLegalModal(legalId);

    });

});


/* ====== CLOSE BUTTON ====== */

legalClose.addEventListener(
    "click",
    closeLegalModal
);


/* ====== OVERLAY ====== */

legalOverlay.addEventListener(
    "click",
    closeLegalModal
);


/* ====== ESCAPE KEY ====== */

document.addEventListener("keydown", event => {

    if (
        event.key === "Escape" &&
        legalModal.classList.contains("active")
    ) {

        closeLegalModal();

    }

});