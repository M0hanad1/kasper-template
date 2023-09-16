const dropMenu = document.querySelector("header ul");
const toggle = document.querySelector(".toggle-menu");
const toggleStyle = window.getComputedStyle(toggle);

window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
        return (dropMenu.style.display = "flex");
    }
    dropMenu.style.display = "none";
});

document.body.addEventListener("click", (event) => {
    if (
        toggleStyle.display !== "none" &&
        dropMenu.style.display !== "none" &&
        event.target !== toggle
    ) {
        dropMenu.style.display = "none";
    }
});

toggle.addEventListener("click", () => {
    if (dropMenu.style.display === "flex") {
        return (dropMenu.style.display = "none");
    }
    dropMenu.style.display = "flex";
});
