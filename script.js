document.addEventListener("DOMContentLoaded", function () {

    var yesButton = document.getElementById('yesButton');
    var noButton = document.getElementById('noButton');

    if (yesButton) {
        yesButton.addEventListener("click", function () {
            nextPage();
        });
    }

    if (noButton) {
        noButton.addEventListener("mouseover", function () {
            moveButton();
        });
    }
});

function nextPage() {
    window.location.href = "yes.html";
}

function moveButton() {
    var x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    var y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}
