let allRows = document.getElementsByTagName('tr');

function highlightElement(id) {
    console.log(document.getElementById(id));
    const element = document.getElementById(id);
    if (element) {
        element.classList.add('highlight-border');
    }
}

function clearAllBorders() {
    Array.from(allRows).forEach(element =>{
        element.classList.remove('highlight-border');
    });
}

function highlightElementsByClass(className) {
    const elements = document.querySelectorAll(className);
    Array.from(elements).forEach(function(element) {
        element.classList.add('highlight-border');
    });
}

function toggleTheme() {
    const root = document.documentElement;
  
    // Check if dark mode is currently enabled
    if (root.classList.contains('light-mode')) {
      // If yes, remove the light-mode class to switch to dark mode
      root.classList.remove('light-mode');
    } else {
      // Otherwise, add the light-mode class to switch to light mode
      root.classList.add('light-mode');
    }
  }
  
  // Example: Attach the function to a button click
  document.getElementById('themeToggleBtn').addEventListener('click', toggleTheme);
