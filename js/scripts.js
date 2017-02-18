var link = document.querySelector(".contacts-feedback");
var form = document.querySelector(".feedback-pop-up");
var icon = document.querySelector(".feedback-close-icon");

link.addEventListener("click", function(event) {
    event.preventDefault();
    form.classList.remove("form-hidden");
});

icon.addEventListener("click", function(event) {
    event.preventDefault();
    form.classList.add("form-hidden");
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (!form.classList.contains("form-hidden")) {
            form.classList.add("form-hidden");
        }
    }
});