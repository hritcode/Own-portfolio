/* ==========================================
   TYPING.JS
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    // Check if Typed.js is loaded
    if (typeof Typed !== "undefined") {

        new Typed("#typing", {

            strings: [
                "Full Stack Developer",
                "Frontend Developer",
                "Backend Developer",
                "JavaScript Enthusiast",
                "React Developer",
                "Python Programmer",
                "Hackathon Participant",
                "Problem Solver",
                "Open Source Contributor"
            ],

            typeSpeed: 70,

            backSpeed: 45,

            backDelay: 1500,

            startDelay: 500,

            loop: true,

            smartBackspace: true,

            showCursor: true,

            cursorChar: "|"

        });

    } else {

        console.error("Typed.js library not found.");

    }

});
