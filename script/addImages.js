const portfolioImgs = document.querySelector(".imgs-container");

for (let i = 1; i < 9; i++) {
    portfolioImgs.innerHTML += `
    <div class="box">
        <img src="./assets/shuffle-0${i}.jpg" alt="image" />
        <div class="caption">
            <h4>Awesome Image</h4>
            <p>Photography</p>
        </div>
    </div>
    `;
}
