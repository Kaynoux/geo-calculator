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
