document.addEventListener("keydown", function(event) {
    if (event.key === "k" || event.key === "K") {
        // Finds the circle Element on the Formulas page or the Calculator page and stores it in the circleElement variable depending on the current page
        const circleElement = document.getElementById("circle") ? document.getElementById("circle") : document.getElementById("btnCircle");

        // Removes all elements from the DOM
        document.body.innerHTML = "";
        
        const restoreButton = document.createElement("button");
        restoreButton.textContent = "Restore";
        restoreButton.onclick = function() {
            // Reloads the page to restore the deleted elements
            location.reload();
        }

        // Appends the circleElement and the restoreButton to the empty body
        document.body.appendChild(circleElement);
        document.body.appendChild(restoreButton);
    }
});

document.getElementById('themeToggleBtn').addEventListener('click', toggleTheme);
