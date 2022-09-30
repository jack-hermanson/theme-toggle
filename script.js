const toggleButton = document.getElementById("toggle-button");

function toggleTheme() {

    const cssTag = document.getElementsByTagName('link')[1];
    const imgTag = document.getElementById("logo");


    if (cssTag.getAttribute("href") === "light.css") {
        cssTag.setAttribute("href", "dark.css");
        toggleButton.innerText = "Theme Activated";
        toggleButton.className = "fancy-border";
        imgTag.setAttribute("src", "dark-mode-logo.png");
    } else {
        cssTag.setAttribute("href", "light.css");
        toggleButton.innerText = "Dark Mode?";
        toggleButton.className = "";
        imgTag.setAttribute("src", "light-mode-logo.png");
    }

}


toggleButton.addEventListener("click", () => {
    toggleTheme();
})

