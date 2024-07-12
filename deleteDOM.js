document.addEventListener("keydown", function(event) {
    if (event.key === "k" || event.key === "K") {
        console.log("Deleting DOM elements");
        const circleElement = document.getElementById("circle");

        document.body.innerHTML = "";
        
        const restoreButton = document.createElement("button");
        restoreButton.textContent = "Restore";
        restoreButton.onclick = function() {
            location.reload();
        }

        document.body.appendChild(circleElement);
        document.body.appendChild(restoreButton);
    }
});

document.getElementById('themeToggleBtn').addEventListener('click', toggleTheme);
