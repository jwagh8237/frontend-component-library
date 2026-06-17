// navbar theme button
const toggleBtn = document.getElementById("theme-toggle");

if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark-mode");
}

toggleBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        localStorage.setItem("theme","dark");
    } else {
        localStorage.setItem("theme","light");
    }
});


// navbar mobile menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    menuBtn.textContent =
        navLinks.classList.contains("active") ? "✕" : "☰";
});


// copy-btn
document.querySelectorAll(".copy-btn").forEach(button => {
    button.addEventListener("click", async () => {
        const text = button.previousElementSibling.innerText;

        await navigator.clipboard.writeText(text);

        button.textContent = "Copied!";

        setTimeout(() => {
            button.textContent = "Copy";
        }, 2000);
    });
});


    // image slider
class Slider {

    constructor(container) {
        this.container = container;
        this.slides = container.querySelectorAll(".mySlides");
        this.prev = container.querySelector(".prev");
        this.next = container.querySelector(".next");
        this.index = 0;

        this.init();
    }

    init() {
        this.show(this.index);

        this.prev.addEventListener("click", () => {
            this.show(this.index - 1);
        });

        this.next.addEventListener("click", () => {
            this.show(this.index + 1);
        });
    }

    show(n) {

        if (n >= this.slides.length) {
            this.index = 0;
        } else if (n < 0) {
            this.index = this.slides.length - 1;
        } else {
            this.index = n;
        }

        this.slides.forEach(slide => {
            slide.style.display = "none";
        });

        this.slides[this.index].style.display = "block";
    }
}

document.querySelectorAll(".slideshow-container").forEach(slider => {
    new Slider(slider);
});
