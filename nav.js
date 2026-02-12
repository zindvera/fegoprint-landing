document.addEventListener('DOMContentLoaded', () => {
  // Get current path from window.location.pathname, ignoring the filename
  const pathParts = window.location.pathname.split('/').filter(part => part.length > 0);
  
  // Assuming your root has index.html, and desktop shows /folder1/folder2/page.html etc.
  // Subtract 1 from length to exclude the filename itself if it's not a directory
  const levelsDeep = pathParts.length > 0 && pathParts[pathParts.length - 1].includes('.') ? pathParts.length - 1 : pathParts.length;
  
  // Construct relative prefix of ../ per folder level
  let relativePrefix = '';
  for (let i = 0; i < levelsDeep; i++) {
    relativePrefix += '../';
  }
  
  const navDiv = document.querySelector('.navdiv');
  if (navDiv) {
    const scrollNavHTML = `
      <div class="scroll-nav" style="width: 100vw; position: fixed; top: 0; left: 0; background: white; z-index: 1000; padding: 0.5rem 1rem; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
        <div class="d-flex align-items-center">
          <a href="https://fegoprint.info/" style="text-decoration: none;">
            <img id="logo" src="https://fegoprint.info/media/logo/fegoprint.png" alt="Logo" style="height: 35px; margin-right: 10px;">
          </a>
          <div class="fsearch-container flex-grow-1">
            <!-- Additional content -->
          </div>
        </div>
      </div>
    `;
    navDiv.insertAdjacentHTML('beforeend', scrollNavHTML);
  }
});
