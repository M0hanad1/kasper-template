const dropMenu = document.querySelector("header ul");
const toggle = document.querySelector(".toggle-menu");

document.body.onclick = (event) => {
    if (dropMenu.style.display !== "none" && event.target !== toggle) {
        dropMenu.style.display = "none";
    }
};

toggle.onclick = () => {
    if (dropMenu.style.display === "flex") {
        return (dropMenu.style.display = "none");
    }
    dropMenu.style.display = "flex";
};
