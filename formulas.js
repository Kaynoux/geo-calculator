let allRows = document.getElementsByTagName('tr');

function highlightElement(id) {
    const element = document.getElementById(id);
    if (element) {
        // Adds highlight-border class to the element to allow further customization in CSS
        element.classList.add('highlight-border');
    }
}

function clearAllBorders() {
    // Converts the HTMLCollection to an array so that we can use the forEach method
    Array.from(allRows).forEach(element =>{
        element.classList.remove('highlight-border');
    });
}

/**
 * All 2d or 3d shapes are highlighted 
 */
function highlightElementsByClass(className) {
    const elements = document.querySelectorAll(className);
    // Converts the HTMLCollection to an array so that we can use the forEach method
    Array.from(elements).forEach(function(element) {
        element.classList.add('highlight-border');
    });
}

