"use strict";

/* ==========================================
   EMAILJS INITIALIZATION
========================================== */

emailjs.init({
    publicKey: "JGkVmeNZ-A1c0HrNm"
});


/* ==========================================
   DOM ELEMENT
========================================== */

const applicationForm =
    document.querySelector("#applicationForm");


/* ==========================================
   FORM SUBMISSION
========================================== */

applicationForm.addEventListener(
    "submit",
    async (event) => {

        event.preventDefault();

        const submitButton =
            applicationForm.querySelector(
                ".application-submit"
            );


        /* Prevent multiple submissions */

        submitButton.disabled = true;

        submitButton.textContent =
            "Submitting...";


        try {

            await emailjs.sendForm(
                "service_zmed196",
                "template_wjmedcn",
                applicationForm
            );


            /* Success */

            submitButton.textContent =
                "Application Submitted ✓";

            applicationForm.reset();


        } catch (error) {

            console.error(
                "EmailJS Error:",
                error
            );


            submitButton.disabled = false;

            submitButton.textContent =
                "Submit Application";

            alert(
                "We couldn't submit your application. Please try again."
            );

        }

    }
);