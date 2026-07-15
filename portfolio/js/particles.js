/* ==========================================
   PARTICLES.JS
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    if (typeof particlesJS !== "undefined") {

        particlesJS("particles-js", {

            particles: {

                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 900
                    }
                },

                color: {
                    value: "#00E5FF"
                },

                shape: {
                    type: "circle"
                },

                opacity: {
                    value: 0.5,
                    random: true
                },

                size: {
                    value: 3,
                    random: true
                },

                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#7C3AED",
                    opacity: 0.4,
                    width: 1
                },

                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false
                }

            },

            interactivity: {

                detect_on: "canvas",

                events: {

                    onhover: {
                        enable: true,
                        mode: "grab"
                    },

                    onclick: {
                        enable: true,
                        mode: "push"
                    },

                    resize: true

                },

                modes: {

                    grab: {
                        distance: 180,
                        line_linked: {
                            opacity: 1
                        }
                    },

                    push: {
                        particles_nb: 4
                    }

                }

            },

            retina_detect: true

        });

    } else {

        console.error("Particles.js library is not loaded.");

    }

});