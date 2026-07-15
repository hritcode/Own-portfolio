// id="cnydb9"
/* ==========================================
   CONTACT.JS
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contactForm");

    if (!form) return;

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = form.querySelector('input[type="text"]').value.trim();
        const email = form.querySelector('input[type="email"]').value.trim();
        const message = form.querySelector("textarea").value.trim();

        /* ==========================
           VALIDATION
        ========================== */

        if (name === "") {
            alert("Please enter your name.");
            return;
        }

        if (email === "") {
            alert("Please enter your email.");
            return;
        }

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (message.length < 10) {
            alert("Message should contain at least 10 characters.");
            return;
        }

        /* ==========================
           SUCCESS
        ========================== */

        alert(
            `Thank you, ${name}! Your message has been received.`
        );

        form.reset();

    });

});

