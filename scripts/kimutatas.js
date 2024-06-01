function toggleVisibilityGreen(className, button) {
    const element = document.querySelector(`.${className}`);
    element.classList.toggle('hidden');
        if(button.classList.contains('sajatEredmenyGomb')){
            button.classList.toggle('sajatZold');
        }
        if(button.classList.contains('csoportEredmenyGomb')){
            button.classList.toggle('csoportZold');
        }
        if(button.classList.contains('OrszagosAtlagGomb')){
            button.classList.toggle('orszagosZold');
        }
    adjustHeights1();
}
function toggleVisibilityRed(className, button) {
    const element = document.querySelector(`.${className}`);
    element.classList.toggle('hidden');
        if(button.classList.contains('sajatEredmenyGomb')){
            button.classList.toggle('sajatPiros');

        }
        if(button.classList.contains('csoportEredmenyGomb')){
            button.classList.toggle('csoportPiros');
        }
        if(button.classList.contains('OrszagosAtlagGomb')){
            button.classList.toggle('orszagosPiros');
        }
    adjustHeights2();
}
function adjustHeights1() {
    const chartImages = document.querySelectorAll('.chartImage1, .chartImage2, .chartImage3');
    const visibleImages = Array.from(chartImages).filter(img => !img.classList.contains('hidden'));
    const visibleCount = visibleImages.length;

    let height;
    switch (visibleCount) {
        case 1:
            height = '60%';
            break;
        case 2:
            height = '50%';
            break;
        case 3:
            height = '33%';
            break;
        default:
            height = '0'; // Default case, though not expected
    }

    visibleImages.forEach(img => {
        img.style.height = height;
    });
}
function adjustHeights2() {
    const chartImages = document.querySelectorAll('.chartImage4, .chartImage5, .chartImage6');
    const visibleImages = Array.from(chartImages).filter(img => !img.classList.contains('hidden'));
    const visibleCount = visibleImages.length;

    let height;
    switch (visibleCount) {
        case 1:
            height = '60%';
            break;
        case 2:
            height = '50%';
            break;
        case 3:
            height = '33%';
            break;
        default:
            height = '0'; // Default case, though not expected
    }

    visibleImages.forEach(img => {
        img.style.height = height;
    });
}
// Initial adjustment on page load
window.onload = adjustHeights1;
window.onload = adjustHeights2;

function showContent(contentId, button) {
    // Hide all content sections and remove active class from all sections
    const contentSections = document.querySelectorAll('.InnerContentContainer');
    contentSections.forEach(section => {
        section.classList.add('hiddenContent');
        section.classList.remove('active');
    });

    // Show the selected content section
    const activeSection = document.getElementById(contentId);
    if (activeSection) {
        activeSection.classList.remove('hiddenContent');
        activeSection.classList.add('active');
    }

    // Remove active class from all arrow images
    const arrowImages = document.querySelectorAll('.kimutatasButtonArrowContainer');
    arrowImages.forEach(image => {
        image.classList.remove('active');
    });

    // Add active class to the arrow image inside the clicked button
    const arrowImage = button.querySelector('.kimutatasButtonArrowContainer');
    if (arrowImage) {
        arrowImage.classList.add('active');
    }
}

// Initial content display setup
window.onload = function() {
    showContent('content1', document.querySelectorAll('.kimutatasNavButtonContainer')[1]); // Show the first content section by default
};
