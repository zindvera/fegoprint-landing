// Inject the loader and text into the body
document.body.insertAdjacentHTML('afterbegin', `
    <div id="wloader-wrapper">
        <div class="wloader-container">
            <div class="wloader"></div>
            <p class="wloader-text">Loading...</p>
        </div>
    </div>
`);

// Hide the loader once the window has fully loaded
window.addEventListener("load", () => {
    const loader = document.getElementById("wloader-wrapper");
    loader.classList.add("wloader-hidden");
});