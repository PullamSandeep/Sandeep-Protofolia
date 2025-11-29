const themeBtn = document.getElementById("themeBtn");

const mainContainer = document.getElementById("mainContainer");



let isDark = false;



themeBtn.addEventListener("click", function() {

    mainContainer.classList.toggle("dark-theme");



    if (isDark) {

        themeBtn.textContent = "Dark Theme";

        isDark = false;

    } else {

        themeBtn.textContent = "Light Theme";

        isDark = true;

    }



});