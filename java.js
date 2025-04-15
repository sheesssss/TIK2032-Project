const darkToggle = document.getElementById("darkToggle");

function updateIcon() {
    if (document.body.classList.contains("dark")) {
        darkToggle.textContent = "☀️";
    } else {
        darkToggle.textContent = "🌙";
    }
}

// Cek preferensi user saat pertama kali load
if (localStorage.getItem("mode") === "dark") {
    document.body.classList.add("dark");
}

updateIcon();

// Event listener toggle
darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    updateIcon();

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("mode", "dark");
    } else {
        localStorage.setItem("mode", "light");
    }
});
