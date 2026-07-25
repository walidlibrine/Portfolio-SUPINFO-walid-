// ========================================
// PORTFOLIO - WALID LIBRINE
// script.js
// ========================================

// ===============================
// Navbar change on scroll
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.background = "#062a66";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.25)";
    } else {
        header.style.background = "#0A3D91";
        header.style.boxShadow = "0 5px 15px rgba(0,0,0,.15)";
    }
});


// ===============================
// Scroll Animation
// ===============================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

sections.forEach((section) => {

    observer.observe(section);

});


// ===============================
// Bouton Retour en Haut
// ===============================

const topButton = document.createElement("button");

topButton.id = "topButton";
topButton.innerHTML = "⬆";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});


// ===============================
// Hover Animation Skills
// ===============================

const skills = document.querySelectorAll(".skill");

skills.forEach((skill) => {

    skill.addEventListener("mouseenter", () => {

        skill.style.transform = "translateY(-10px)";

    });

    skill.addEventListener("mouseleave", () => {

        skill.style.transform = "translateY(0px)";

    });

});


// ===============================
// Hover Animation Cards
// ===============================

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});


// ===============================
// Typing Effect
// ===============================

const subtitle = document.querySelector(".hero-text h2");

if (subtitle) {

    const originalText = subtitle.textContent;

    subtitle.textContent = "";

    let index = 0;

    function typing() {

        if (index < originalText.length) {

            subtitle.textContent += originalText.charAt(index);

            index++;

            setTimeout(typing, 70);

        }

    }

    typing();

}


// ===============================
// Contact Form
// ===============================

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const nom = form.querySelector("input[type='text']").value;
        const email = form.querySelector("input[type='email']").value;
        const message = form.querySelector("textarea").value;

        if (nom === "" || email === "" || message === "") {

            alert("Veuillez remplir tous les champs.");

            return;

        }

        alert("Merci " + nom + " ! Votre message a été envoyé avec succès.");

        form.reset();

    });

}


// ===============================
// Active Menu on Scroll
// ===============================

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ===============================
// Console Message
// ===============================

console.log("Portfolio de Walid Librine chargé avec succès !");