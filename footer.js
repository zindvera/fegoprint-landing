// script.js
document.addEventListener("DOMContentLoaded", function () {
    const footerTemplate = `
    <footer class="main-footer">
        <div class="footer-container">
            <p class="footer-copyright">&copy; ${new Date().getFullYear()} FegoPrint. All rights reserved.</p>
       <p class="footer-links">
    <a href="https://fegoprint.info/about.html">About</a>
    <span class="footer-divider">|</span>
    <a href="https://fegoprint.info/privacy.html">Privacy</a>
    <span class="footer-divider">|</span>
    <a href="https://fegoprint.info/terms.html">Terms</a>
    <span class="footer-divider">|</span>
    <a href="https://fegoprint.info/cookies.html">Cookies</a>
    <span class="footer-divider">|</span>
    <a href="https://fegoprint.info/contact.html">Contact</a>
</p>
        </div>
    </footer>`;

    document.body.insertAdjacentHTML('beforeend', footerTemplate);
});