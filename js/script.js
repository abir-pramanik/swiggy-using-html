// script.js

document.addEventListener("DOMContentLoaded", () => {
    const searchBox = document.querySelector(".sc-pKqro.hansPC");

    searchBox.addEventListener("click", () => {
        alert("Search function not implemented yet 😅");
    });

    // Smooth scroll for future navigation
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href"))
                .scrollIntoView({ behavior: "smooth" });
        });
    });
});
