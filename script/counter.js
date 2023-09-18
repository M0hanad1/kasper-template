const statsContainer = document.querySelector(".stats");
const statsNumbers = document.querySelectorAll(".stats h2");
let started = false;

function startCount(element) {
    const data = element.getAttribute("data");

    let counter = setInterval(() => {
        if (element.textContent === data) {
            clearInterval(counter);
        }
        element.textContent++;
    }, 3000 / data);
}

window.addEventListener("scroll", () => {
    if (this.scrollY >= statsContainer.offsetTop) {
        if (!started) {
            statsNumbers.forEach(startCount);
        }
        started = true;
    }
});
