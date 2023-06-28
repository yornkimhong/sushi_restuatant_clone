var icons = document.getElementById("icon");
icons.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        icon.src = "./image/sun1.png";
    } else {
        icon.src = "./image/moon.png";
    }
} 