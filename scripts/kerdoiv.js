document.addEventListener('DOMContentLoaded', function() {


    const darkMode = true; //turn dark mode on and off

    const questionList = document.getElementById('question-list');
    const questionListDark = document.getElementById('question-list');
    const progressBar = document.querySelector('.progressBarBar');

    // Function to update progress bar
    function updateProgressBar() {
        const answeredQuestions = questions.filter(q => q.answer !== q.initialAnswer).length;
        const totalQuestions = questions.length;
        const progress = (answeredQuestions / totalQuestions) * 100;
        progressBar.style.width = `${progress}%`;
    }


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
    //updateProgressBar();
});
///////////////////////////////////////////////////////////////
// Get all the radio button groups and the progress bar element
const radioGroups = [...new Set([...document.querySelectorAll('input[type="radio"]')].map(rb => rb.name))];
const progressBar = document.querySelector('.progressBarBar');
const nextButton = document.getElementById('nextButton');

// Add event listener to each radio button
radioGroups.forEach(group => {
  const groupButtons = document.querySelectorAll(`input[name="${group}"]`);
  groupButtons.forEach(button => button.addEventListener('change', updateProgressBar));
});

//

function updateProgressBar() {
  const numSelectedGroups = radioGroups.filter(group => {
    return [...document.querySelectorAll(`input[name="${group}"]`)].some(rb => rb.checked);
  }).length;

  const progressPercentage = (numSelectedGroups / radioGroups.length) * 100;

  progressBar.style.width = `${progressPercentage}%`;
  progressBarPercentage.textContent = `${Math.round(progressPercentage)}%`;
}

function checkAllGroupsComplete() {
  let allGroupsComplete = true;

  radioGroups.forEach(group => {
    const groupButtons = document.querySelectorAll(`input[name="${group}"]`);
    const groupContainer = groupButtons[0].closest('.questionContainerKerdoiv');

    if (![...groupButtons].some(rb => rb.checked)) {
      allGroupsComplete = false;
      groupContainer.classList.add('unanswered');
    } else {
      groupContainer.classList.remove('unanswered');
    }
  });

  if (!allGroupsComplete) {
    alert("Kérjük válaszoljon meg minden kérdést!");
  } else {
    console.log("All questions answered. Proceeding to next step...");
  }
}

nextButton.addEventListener('click', checkAllGroupsComplete);
window.addEventListener('load', updateProgressBar);

// Also add an event listener for any radio button changes
radioGroups.forEach(group => {
  const groupButtons = document.querySelectorAll(`input[name="${group}"]`);
  groupButtons.forEach(button => {
    button.addEventListener('change', updateProgressBar);
  });
});


/////////////////////////////////////////////////////

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
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('myRangeR');
    const percentageText = document.getElementById('percentage');

    function updatePercentageTextPosition() {
        const value = slider.value;
        percentageText.textContent = value + '%';

        // Calculate the position of the percentage text relative to the thumb
        const sliderRect = slider.getBoundingClientRect();
        const thumbOffset = ((value - slider.min) / (slider.max - slider.min)) * sliderRect.width;

        // Adjust the left position of the percentage text to center it over the thumb
        percentageText.style.left = `${thumbOffset}px`;
    }

    // Update the percentage text when slider value changes
    slider.addEventListener('input', updatePercentageTextPosition);

    // Initialize the position of the percentage text
    updatePercentageTextPosition();
    
    // Handle window resize to reposition the percentage text
    window.addEventListener('resize', updatePercentageTextPosition);
});

    // SLider bg color
    const slider = document.getElementById('myRangeR');
    const percentageText = document.getElementById('percentage');

    slider.addEventListener('input', function () {
        const value = this.value;
        percentageText.textContent = `${value}%`;
        const percentage = value / this.max * 100;
        this.style.background = `linear-gradient(to right, #00A2CF ${percentage}%, #d3d3d3 ${percentage}%)`;
    });

    // Initialize background
    slider.dispatchEvent(new Event('input'));


        function updateThumbMargins(slider) {
        const value = parseInt(slider.value, 10);
        if (value === 1) {
            slider.style.marginRight = '5px';
            slider.style.marginLeft = '0px';
        } else if (value === 4) {
            slider.style.marginLeft = '5px';
            slider.style.marginRight = '0px';
        } else {
            slider.style.marginLeft = '0px';
            slider.style.marginRight = '0px';
        }
    }
