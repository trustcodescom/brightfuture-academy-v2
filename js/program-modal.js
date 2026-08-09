"use strict";

/* ==========================================
   PROGRAM DATA
========================================== */

const programs = {

    about: {

        title: "About BrightFuture Academy",

        description:
            "BrightFuture Academy is dedicated to providing exceptional education that empowers every child to achieve academic excellence, build strong character and become confident lifelong learners. We provide a safe, supportive and inspiring environment where students are encouraged to discover their potential, develop their talents and prepare for a successful future.",

        points: [
            "Experienced and dedicated teachers",
            "Modern learning facilities",
            "Safe and caring environment",
            "Holistic education",
            "Strong focus on academic excellence",
            "Creativity, critical thinking and problem-solving",
            "Character development and personal responsibility",
            "Supportive learning environment for every student"
        ]

    },

    creche: {

        title: "Creche",

        description:
            "A warm and caring start where little ones explore, play and grow in a safe and nurturing environment.",

        points: [
            "Caring and supportive environment",
            "Age-appropriate learning activities",
            "Play-based learning and exploration",
            "Social and emotional development"
        ]

    },

    nursery: {

        title: "Nursery",

        description:
            "A strong foundation where children develop early academic skills while building confidence, creativity and positive relationships.",

        points: [
            "Early literacy and numeracy",
            "Creative and practical activities",
            "Social and communication skills",
            "Confidence-building experiences"
        ]

    },

    primary: {

        title: "Primary",

        description:
            "A balanced learning experience that helps students develop strong academic foundations, critical thinking and good character.",

        points: [
            "Strong foundation in core subjects",
            "Critical thinking and problem solving",
            "Technology-supported learning",
            "Character and personal development"
        ]

    },

    secondary: {

        title: "Secondary",

        description:
            "A focused academic environment that prepares students for higher education, future careers and responsible citizenship.",

        points: [
            "Comprehensive academic preparation",
            "Independent learning skills",
            "Career and university preparation",
            "Leadership and character development"
        ]

    }

};


/* ==========================================
   DOM ELEMENTS
========================================== */

const programModal =
    document.querySelector("#programModal");

const programOverlay =
    document.querySelector(".program-overlay");

const programClose =
    document.querySelector(".program-close");

const programButtons =
    document.querySelectorAll(".learn-more");

const programTitle =
    document.querySelector("#programModalTitle");

const programDescription =
    document.querySelector("#programModalDescription");

const programList =
    document.querySelector("#programModalList");

const programApplyBtn =
    document.querySelector("#programApplyBtn");


/* ==========================================
   OPEN PROGRAM MODAL
========================================== */

function openProgramModal(programId) {

    const program = programs[programId];

    if (!program) {
        return;
    }

    programTitle.textContent = program.title;

    programDescription.textContent =
        program.description;

    programList.innerHTML = "";

    program.points.forEach(point => {

        const li = document.createElement("li");

        li.textContent = point;

        programList.appendChild(li);

    });


    /* ==========================================
       APPLICATION BUTTON
    ========================================== */

    if (programId === "about") {

        programApplyBtn.style.display = "none";

    } else {

        programApplyBtn.style.display = "inline-flex";

    }


    /* ==========================================
       OPEN MODAL
    ========================================== */

    programModal.classList.add("active");

    programModal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.style.overflow = "hidden";

    programClose.focus();

}


/* ==========================================
   CLOSE PROGRAM MODAL
========================================== */

function closeProgramModal() {

    programModal.classList.remove("active");

    programModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow = "";

}


/* ==========================================
   LEARN MORE BUTTONS
========================================== */

programButtons.forEach(button => {

    button.addEventListener("click", event => {

        event.preventDefault();

        const programId =
            button.dataset.info;

        openProgramModal(programId);

    });

});


/* ==========================================
   CLOSE EVENTS
========================================== */

programClose.addEventListener(
    "click",
    closeProgramModal
);

programOverlay.addEventListener(
    "click",
    closeProgramModal
);

programApplyBtn.addEventListener("click", (event) => {

    event.preventDefault();

    // Close the program modal
    closeProgramModal();

    // Wait for the closing animation
    setTimeout(() => {

        openApplicationModal();

    }, 300);

});

//==========================================
  //ESCAPE KEY
//========================================== 

document.addEventListener("keydown", event => {

    if (
        event.key === "Escape" &&
        programModal.classList.contains("active")
    ) {

        closeProgramModal();

    }

});