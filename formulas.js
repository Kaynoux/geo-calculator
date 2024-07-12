let allRows = document.getElementsByTagName('tr');

function highlightElement(id) {
    const element = document.getElementById(id);
    if (element) {
    element.style.border = '2px solid red';
    }
}

function clearAllBorders() {
    Array.from(allRows).forEach(element =>{
    element.style.border = 'none';
    });
}

function highlightElementsByClass(className) {
    const elements = document.querySelectorAll(className);
    Array.from(elements).forEach(function(element) {
    element.style.border = '2px solid red';
    });
}