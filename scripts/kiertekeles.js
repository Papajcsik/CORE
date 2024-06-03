function toggleActive(button) {
    // Remove 'active' class from all arrow icons
    const arrows = document.querySelectorAll('.arrowDown');
    arrows.forEach(arrow => {
        arrow.classList.remove('active');
    });

    // Add 'active' class to the arrow icon associated with the clicked button
    const arrow = button.nextElementSibling;
    arrow.classList.add('active');
}
