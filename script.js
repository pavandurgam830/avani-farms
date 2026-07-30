
// Show button when scrolling
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    let button = document.getElementById("topBtn");

    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

// Scroll to top
function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 100;
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


// ================= HERO IMAGE SLIDER =================

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentSlide = 0;

function showSlide(index) {

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    dots.forEach(dot => {
        dot.classList.remove("active-dot");
    });

    slides[index].classList.add("active");
    dots[index].classList.add("active-dot");
}

// Next Button
nextBtn.addEventListener("click", () => {
    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
});

// Previous Button
prevBtn.addEventListener("click", () => {
    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);
});

// Dot Click
dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

// Auto Slide
setInterval(() => {
    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
}, 4000);

// Show first slide
showSlide(currentSlide);


function sendWhatsApp() {

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    const text =
        `Hello Avani Farms,

Name: ${name}
Phone: ${phone}

Product: Organic Vegetables

Requirement:
${message}`;

    window.open(
        "https://wa.me/918985784860?text=" + encodeURIComponent(text),
        "_blank"
    );
}


function sendFruitWhatsApp() {

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    let text =
        `🌿 Organic Fruits Enquiry

👤 Name: ${name}
📞 Mobile: ${phone}

🍎 Requirement:
${message}`;

    let whatsappURL =
        `https://wa.me/918985784860?text=${encodeURIComponent(text)}`;

    window.open(whatsappURL, "_blank");
}


function sendFertilizerWhatsApp() {

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    let text = `🌱 Organic Fertilizers Enquiry

👤 Name: ${name}
📞 Mobile: ${phone}

📝 Requirement:
${message}`;

    let whatsappURL =
        "https://wa.me/918985784860?text=" + encodeURIComponent(text);

    window.open(whatsappURL, "_blank");
}



// ================= SCROLL ANIMATION =================

const hiddenElements = document.querySelectorAll(
    " .product-card, .benefit-card, .why-card, .mission-card, .update-card, .counter-box, .about-content, .contact-info, .contact-form"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }

    });

});

hiddenElements.forEach((el) => {
    el.classList.add("hidden");
    observer.observe(el);
});

// ================= COUNTER ANIMATION =================

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;
            const target = +counter.getAttribute("data-target");

            let count = 0;

            const updateCounter = () => {

                const increment = Math.ceil(target / 100);

                if (count < target) {

                    count += increment;

                    if (count > target) {
                        count = target;
                    }

                    counter.innerText = count;

                    setTimeout(updateCounter, 20);

                }

            };

            updateCounter();

            counterObserver.unobserve(counter);

        }

    });

});

counters.forEach(counter => {
    counterObserver.observe(counter);
});


// ================= MOBILE MENU =================

const menuToggle = document.getElementById("menu-toggle");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Show button when scrolling
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    let button = document.getElementById("topBtn");

    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

// Scroll to top
function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

