document.addEventListener('DOMContentLoaded', function() {
    const questions = [
        { id: 1, text: "Nagyon komoly kerdes?", answer: 0, initialAnswer: 0 },
        { id: 2, text: "Második kérdés?", answer: 0, initialAnswer: 0 },
        { id: 3, text: "Harmadik kérdés?", answer: 0, initialAnswer: 0 },
        { id: 4, text: "Negyedik kérdés?", answer: 0, initialAnswer: 0 },
        // { id: 5, text: "Nagyon komoly kerdes?", answer: 0, initialAnswer: 0 },
        // { id: 6, text: "Második kérdés?", answer: 0, initialAnswer: 0 },
        // { id: 7, text: "Harmadik kérdés?", answer: 0, initialAnswer: 0 },
        // { id: 8, text: "Nagyon komoly kerdes?", answer: 0, initialAnswer: 0 },
        // { id: 9, text: "Második kérdés?", answer: 0, initialAnswer: 0 },
        // { id: 10, text: "Harmadik kérdés?", answer: 0, initialAnswer: 0 },
    ];



    const questionList = document.getElementById('question-list');
    const progressBar = document.querySelector('.progressBarBar');

    // Function to update progress bar
    function updateProgressBar() {
        const answeredQuestions = questions.filter(q => q.answer !== q.initialAnswer).length;
        const totalQuestions = questions.length;
        const progress = (answeredQuestions / totalQuestions) * 100;
        progressBar.style.width = `${progress}%`;
    }

    questions.forEach(question => {
        const questionContainer = document.createElement('div');
        questionContainer.className = 'questionContainerKerdoiv';

        const questionTextContainer = document.createElement('div');
        questionTextContainer.className = 'questiontextContainer';

        const questionText = document.createElement('div');
        questionText.className = 'KerdesTextkerodiv';
        questionText.textContent = `${question.id}. ${question.text}`;

        const sliderContainer = document.createElement('div');
        sliderContainer.className = 'slider-container';

        const slider = document.createElement('input');
        slider.type = 'range';
        slider.id = `segmented-slider-${question.id}`;
        slider.min = '1';
        slider.max = '4';
        slider.value = question.answer;
        slider.step = '1';
        slider.className = 'segmented-slider hidden-thumb'; // Add hidden-thumb class to hide the thumb initially

        // Add event listener to update the array and progress bar
        slider.addEventListener('input', function() {
            question.answer = parseInt(slider.value, 10);
            console.log(questions)
            slider.classList.remove('hidden-thumb'); // Show the thumb when the slider is used
            updateProgressBar();  // Update the progress bar
            updateSelectedMarker(slider); // Update selected marker
        });

        const optionTextContainer = document.createElement('div');
        optionTextContainer.className = 'optionTextContainer';

        const options = ['Nem Jellemző', 'Kevésbé Jellemző', 'Jellemző', 'Nagyon Jellemző'];
        options.forEach((optionText, index) => {
            const option = document.createElement('div');
            option.className = 'optionText';
            if (index === 1) option.classList.add('centerLeft');
            if (index === 2) option.classList.add('centerRight');
            if (index === 3) option.classList.add('right');
            option.textContent = optionText;
            optionTextContainer.appendChild(option);
        });

        const hr = document.createElement('div');
        hr.className = 'hr';

        questionTextContainer.appendChild(questionText);
        sliderContainer.appendChild(slider);
        questionContainer.appendChild(questionTextContainer);
        questionContainer.appendChild(sliderContainer);
        questionContainer.appendChild(optionTextContainer);
        questionContainer.appendChild(hr);
        questionList.appendChild(questionContainer);
    });

    // Function to calculate the correct position for markers
    function positionMarkers() {
        const sliders = document.querySelectorAll('.segmented-slider');
        sliders.forEach(slider => {
            const sliderContainer = slider.parentElement;
            const markerCount = 4;
            const sliderWidth = sliderContainer.offsetWidth;
            const markerWidth = 25; // Adjust this if your marker's width changes

            // Remove existing markers
            const existingMarkers = sliderContainer.querySelectorAll('.marker');
            existingMarkers.forEach(marker => marker.remove());

            // Create and position new markers
            for (let i = 1; i <= markerCount; i++) {
                const marker = document.createElement('div');
                marker.className = 'marker';

                let leftPosition = ((i - 1) / (markerCount - 1)) * (sliderWidth - markerWidth) + (markerWidth / 2);
                if (i === 1) {
                    leftPosition += 1.5; // Adjust the first marker
                } else if (i === markerCount) {
                    leftPosition -= 1.5; // Adjust the last marker
                }

                marker.style.left = `${leftPosition}px`;
                marker.dataset.value = i;
                sliderContainer.appendChild(marker);
            }
            updateSelectedMarker(slider); // Update selected marker initially
        });
    }

// Function to update the selected marker
function updateSelectedMarker(slider) {
    const sliderContainer = slider.parentElement;
    const markers = sliderContainer.querySelectorAll('.marker');
    const selectedValue = slider.value;

    // Remove the selected class from all markers
    markers.forEach(marker => {
        marker.classList.remove('selected');
    });

    // Add the selected class to the marker with the current value
    markers.forEach(marker => {
        if (marker.dataset.value == selectedValue) {
            marker.classList.add('selected');
        }
    });
}


// Initial marker positioning
positionMarkers();

// Remove selected class from all markers initially
document.querySelectorAll('.marker').forEach(marker => {
    marker.classList.remove('selected');
});


// Reposition markers on window resize
window.addEventListener('resize', positionMarkers);

    // Move thumb to marker on marker click
    document.querySelector('.kerdoivKerdesek').addEventListener('click', function(event) {
        if (event.target.classList.contains('marker')) {
            const slider = event.target.closest('.slider-container').querySelector('input[type="range"]');
            const value = event.target.dataset.value;
            slider.value = value;
            slider.dispatchEvent(new Event('input')); // Trigger input event to update slider
        }
    });

    // Initial progress bar update
    updateProgressBar();
});


/////////////////////////////////////infinite slider
    const sliderQuestion= [
        { id: 1, text: "Nagyon komoly kerdes?", answer: 0, initialAnswer: 50 },
    ];

document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('myRangeR');
    const percentageText = document.getElementById('percentage');

    // Update the percentage text when slider value changes
    slider.addEventListener('input', function() {
        const value = this.value;
        percentageText.textContent = value + '%';
        sliderQuestion[0].answer = this.value;
        // console.log(sliderQuestion)
        // Calculate the position of the percentage text relative to the thumb
        const sliderRect = this.getBoundingClientRect();
        const percentageTextWidth = percentageText.offsetWidth;
        const thumbOffset = ((value - this.min) / (this.max - this.min)) * sliderRect.width;

        // Adjust the margin-left of the percentage text to center it over the thumb
        const marginLeft = thumbOffset - (percentageTextWidth / 2);

        // Ensure the text stays within the slider bounds
        if (marginLeft < 0) {
            percentageText.style.marginLeft = '0px';
        } else if (marginLeft + percentageTextWidth > sliderRect.width) {
            percentageText.style.marginLeft = `${sliderRect.width - percentageTextWidth}px`;
        } else {
            percentageText.style.marginLeft = `${marginLeft}px`;
        }
    });

    // Initialize the position of the percentage text
    slider.dispatchEvent(new Event('input'));
});
window.addEventListener('resize', function() {
    const slider = document.getElementById('myRangeR');
    const percentageText = document.getElementById('percentage');

    // Update the percentage text when slider value changes
    slider.addEventListener('input', function() {
        const value = this.value;
        percentageText.textContent = value + '%';
        sliderQuestion[0].answer = this.value;
        // console.log(sliderQuestion)
        // Calculate the position of the percentage text relative to the thumb
        const sliderRect = this.getBoundingClientRect();
        const percentageTextWidth = percentageText.offsetWidth;
        const thumbOffset = ((value - this.min) / (this.max - this.min)) * sliderRect.width;

        // Adjust the margin-left of the percentage text to center it over the thumb
        const marginLeft = thumbOffset - (percentageTextWidth / 2);

        // Ensure the text stays within the slider bounds
        if (marginLeft < 0) {
            percentageText.style.marginLeft = '0px';
        } else if (marginLeft + percentageTextWidth > sliderRect.width) {
            percentageText.style.marginLeft = `${sliderRect.width - percentageTextWidth}px`;
        } else {
            percentageText.style.marginLeft = `${marginLeft}px`;
        }
    });

    // Initialize the position of the percentage text
    slider.dispatchEvent(new Event('input'));
});

    // SLider bg color
    const slider = document.getElementById('myRangeR');
    const percentageText = document.getElementById('percentage');

    slider.addEventListener('input', function () {
        const value = this.value;
        percentageText.textContent = `${value}%`;
        const percentage = value / this.max * 100;
        this.style.background = `linear-gradient(to right, #51BCDA ${percentage}%, #d3d3d3 ${percentage}%)`;
    });

    // Initialize background
    slider.dispatchEvent(new Event('input'));
