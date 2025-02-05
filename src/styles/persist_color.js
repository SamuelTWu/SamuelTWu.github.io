function loadCSSVariables() {
    const color1 = localStorage.getItem('color-1');
    const color2 = localStorage.getItem('color-2');
    const color3 = localStorage.getItem('color-3');
    const color4 = localStorage.getItem('color-4');
    const color5 = localStorage.getItem('color-5');
  
    // Apply stored values if they exist
    if (color1) {
      document.documentElement.style.setProperty('--color-1', color1);
    }
    if (color2) {
      document.documentElement.style.setProperty('--color-2', color2);
    }
    if (color3) {
        document.documentElement.style.setProperty('--color-3', color3);
    }
    if (color4) {
    document.documentElement.style.setProperty('--color-4', color4);
    }
    if (color5) {
        document.documentElement.style.setProperty('--color-5', color5);
    }
}
  
// Load the CSS variables when the page loads
window.addEventListener('DOMContentLoaded', loadCSSVariables);