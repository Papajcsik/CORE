    document.addEventListener("DOMContentLoaded", function() {
        const button = document.querySelector(".button");
        const navbarElements = document.querySelectorAll(".div-back, .div-back-seventyfive, .div-back-hundred, .div-mid, .div-mid-fifty, .div-mid-hundred, .div-front");

        button.addEventListener("click", function() {
            navbarElements.forEach(element => {
                element.classList.add("slide-out");
            });
        });
    });