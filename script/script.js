// Add portfolio images
function addImages() {
    const portfolioImgs = document.querySelector(".imgs-container");

    for (let i = 1; i < 9; i++) {
        portfolioImgs.innerHTML += `
        <div class="box">
            <img src="./assets/shuffle-0${i}.jpg" alt="image" />
            <div class="caption">
                <h4>Awesome Image</h4>
                <p>Photography</p>
            </div>
        </div>`;
    }
}

// Show/Hide toggle menu
function toggle() {
    const dropMenu = document.querySelector("header ul");
    const toggle = document.querySelector(".toggle-menu");
    const toggleStyle = window.getComputedStyle(toggle);

    window.addEventListener("resize", () => {
        if (window.innerWidth >= 768) {
            return (dropMenu.style.visibility = "visible");
        }
        dropMenu.classList.remove("show");
    });

    document.body.addEventListener("click", (event) => {
        if (
            toggleStyle.display !== "none" &&
            dropMenu.classList.contains("show") &&
            event.target !== toggle
        ) {
            dropMenu.classList.remove("show");
        }
    });

    toggle.addEventListener("click", () => {
        if (dropMenu.classList.contains("show")) {
            return dropMenu.classList.remove("show");
        }
        dropMenu.classList.add("show");
    });
}

// Show/Hide search input
function search() {
    const search = document.querySelector("header .form i");
    const searchInput = document.querySelector("header input");

    search.addEventListener("click", () => {
        if (searchInput.style.left === "11px") {
            searchInput.style.left = "150%";
            return (searchInput.value = "");
        }
        searchInput.style.left = "11px";
    });

    document.body.addEventListener("click", (event) => {
        if (
            searchInput.style.left === "11px" &&
            event.target !== searchInput &&
            event.target !== search
        ) {
            searchInput.style.left = "150%";
            searchInput.value = "";
        }
    });
}

// Stats counter
function counter() {
    const beforeContainer = document.querySelector(".about");
    const statsNumbers = document.querySelectorAll(".stats h2");
    let started = false;

    const startCount = (element) => {
        const data = element.getAttribute("data");

        let counter = setInterval(() => {
            if (element.textContent === data) {
                clearInterval(counter);
            }
            element.textContent++;
        }, 3000 / data);
    };

    window.addEventListener("scroll", () => {
        if (this.scrollY >= beforeContainer.offsetTop) {
            if (!started) {
                console.log("start");
                statsNumbers.forEach(startCount);
            }
            started = true;
        }
    });
}

addImages();
toggle();
search();
counter();

// Update footer year
document.getElementById("year").textContent = new Date().getFullYear();
