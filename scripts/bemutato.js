document.querySelectorAll('.arrowButton').forEach(button => {
    button.addEventListener('click', function() {
        if(window.innerWidth < 1150){
            const container = this.closest('.explainingContainer2');
            const isShifted = container.style.transform === 'translateX(-20px)';
            container.style.transform = isShifted ? 'translateX(0)' : 'translateX(-20px)';
            const box = container.querySelector('.explanationbox');

            if (isShifted) {
                box.style.opacity = '0';
                setTimeout(() => {
                    box.style.display = 'none';
                }, 100); // Wait 0.5s before setting display to none
            } else {
                setTimeout(() => {
                    box.style.display = 'block';
                    setTimeout(() => {
                        box.style.opacity = '1';
                    }, 10); // Small delay to allow the display change to take effect
                }, 100); // Wait 0.5s before setting display to block
            }
        }
    });
});

// Handle window resize event
window.addEventListener('resize', function() {
    document.querySelectorAll('.explainingContainer2').forEach(container => {
        container.style.transform = 'translateX(0)';
        const box = container.querySelector('.explanationbox');
                if(window.innerWidth < 1150){
                        box.style.opacity = '0';
                }
        setTimeout(() => {
                if(window.innerWidth < 1150){
                    box.style.display = 'none';
                }
        }, 500); // Wait 0.5s before setting display to none
    });
});
