var box1 = document.querySelector("#box1");

window.addEventListener("keydown", function () {
    box1.classList.add("animate")
    setTimeout(function () {
        box1.classList.remove("animate");
    }, 600);
})
