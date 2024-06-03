    document.addEventListener("DOMContentLoaded", function() {
        const button = document.querySelector(".button");
        const navbarElements = document.querySelectorAll(".div-back, .div-back-seventyfive, .div-back-hundred, .div-mid, .div-mid-fifty, .div-mid-hundred, .div-front");

        button.addEventListener("click", function() {
            navbarElements.forEach(element => {
                element.classList.add("slide-out");
            });
        });
    });

function toggleLanguage(lang) {
    if (lang === 'en') {
        document.querySelector('.en').classList.add('active');
        document.querySelector('.hu').classList.remove('active');
    } else if (lang === 'hu') {
        document.querySelector('.hu').classList.add('active');
        document.querySelector('.en').classList.remove('active');
    }
}

