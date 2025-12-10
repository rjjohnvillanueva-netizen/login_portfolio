// ================= Smooth Scrolling =================
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// ================= Active Navigation Highlight =================
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    let current = "";
    sections.forEach(section => {
        if (scrollY >= section.offsetTop - 100) {
            current = section.id;
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").slice(1) === current) {
            link.classList.add("active");
        }
    });
});

// ================= Fade In Scroll Animation =================
const sectionsFade = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
    sectionsFade.forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            sec.classList.add("show");
        }
    });
});

// ================= Skill Bar Progress Animation =================
const skillBars = document.querySelectorAll(".skill-bar span");
window.addEventListener("scroll", () => {
    skillBars.forEach(bar => {
        const top = bar.getBoundingClientRect().top;
        if (top < window.innerHeight - 80) {
            const width = bar.getAttribute("style").match(/width:\s*([0-9]+%)/)[1];
            bar.style.setProperty("--target-width", width);
        }
    });
});

// ================= Non-destructive Skill Bar Animation =================
document.addEventListener("scroll", () => {
    document.querySelectorAll(".skill-card").forEach(card => {
        const bar = card.querySelector(".skill-bar span");
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 120) {
            const width = bar.style.width;
            bar.style.width = "0%";
            setTimeout(() => {
                bar.style.width = width;
            }, 50);
        }
    });
});

// ================= Fade-in Portfolio & Contact Elements =================
document.addEventListener("scroll", () => {
    document.querySelectorAll(".fade-up").forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 120) {
            el.classList.add("show");
        }
    });
});

// ================= Logout Functionality =================
document.addEventListener("click", (e) => {
    if (e.target && e.target.id === "logoutBtn") {
        // Clear login data from localStorage
        localStorage.removeItem("loggedIn");
        localStorage.removeItem("currentUser");

        // Redirect to your login repo's GitHub Pages URL
        window.location.href = "https://rjjohnvillanueva-netizen.github.io/login/"; 
    }
});

// ================= Auto Redirect if Not Logged In =================
document.addEventListener("DOMContentLoaded", () => {
    if (!localStorage.getItem("loggedIn")) {
        // Redirect immediately to login repo if user is not logged in
        window.location.href = "https://rjjohnvillanueva-netizen.github.io/login/"; 
    }
});

// ================= Profile Image Hover Effect =================
const profileImage = document.getElementById("profileImage");
// (You can add hover effects or dropdown menu for logout here if needed)
