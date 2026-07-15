/* ==========================================
   PORTFOLIO MAIN.JS
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =============================
       DARK / LIGHT MODE
    ============================= */

    const themeToggle = document.getElementById("themeToggle");

    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light");
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("light");

        if (document.body.classList.contains("light")) {

            localStorage.setItem("theme", "light");

            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';

        } else {

            localStorage.setItem("theme", "dark");

            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';

        }

    });

    /* =============================
       SCROLL TO TOP BUTTON
    ============================= */

    const scrollBtn = document.getElementById("scrollTop");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            scrollBtn.style.display = "flex";

        } else {

            scrollBtn.style.display = "none";

        }

    });

    scrollBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

    /* =============================
       STICKY NAVBAR SHADOW
    ============================= */

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.style.boxShadow = "0 10px 25px rgba(0,0,0,.25)";

        } else {

            header.style.boxShadow = "none";

        }

    });

    /* =============================
       ACTIVE NAV LINK
    ============================= */

    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;

            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

    /* =============================
       SMOOTH SCROLL
    ============================= */

    navLinks.forEach(link => {

        link.addEventListener("click", function(e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            target.scrollIntoView({

                behavior: "smooth"

            });

        });

    });

    /* =============================
       SCROLL REVEAL
    ============================= */

    const revealElements = document.querySelectorAll(
        ".section, .project-card, .skill-card"
    );

    function reveal() {

        revealElements.forEach(el => {

            const windowHeight = window.innerHeight;

            const elementTop = el.getBoundingClientRect().top;

            const revealPoint = 120;

            if (elementTop < windowHeight - revealPoint) {

                el.classList.add("fade-up");

            }

        });

    }

    window.addEventListener("scroll", reveal);

    reveal();

    /* =============================
       LOADER
    ============================= */

    const loader = document.querySelector(".loader");

    if (loader) {

        window.addEventListener("load", () => {

            loader.style.opacity = "0";

            setTimeout(() => {

                loader.style.display = "none";

            }, 500);

        });

    }

});

/* ==========================================
   END OF FILE
========================================== */
