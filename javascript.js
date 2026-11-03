
const themeBtn = document.getElementById("themeBtn");

// Load saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    themeBtn.textContent = "☀";
} else {
    themeBtn.textContent = "☾";
}

// Toggle theme
themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeBtn.textContent = "☀";
        localStorage.setItem("theme", "light");
    } else {
        themeBtn.textContent = "☾";
        localStorage.setItem("theme", "dark");
    }

});
