function toggleVisibilityGreen(className, chartSet, button) {
    const element = document.querySelectorAll(`.chartImage${chartSet}`);
    element.forEach(chart => {
        chart.classList.toggle('hidden');
    });
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
function toggleVisibilityGreen(className, chartSet, button) {
    const element = document.querySelectorAll(`.chartImage${chartSet}`);
    element.forEach(chart => {
        chart.classList.toggle('hidden');
    });
        if(button.classList.contains('sajatEredmenyGomb')){
            button.classList.toggle('sajatZold');

        }
        if(button.classList.contains('csoportEredmenyGomb')){
            button.classList.toggle('csoportZold');
        }
        if(button.classList.contains('OrszagosAtlagGomb')){
            button.classList.toggle('orszagosZold');
        }
    adjustHeights2();
}
function toggleVisibilityRed(className, chartSet, button) {
    const element = document.querySelectorAll(`.chartImage${chartSet}`);
    element.forEach(chart => {
        chart.classList.toggle('hidden');
    });
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

    // Remove active class from all arrow images and containers
    const arrowImages = document.querySelectorAll('.kimutatasButtonArrowContainer');
    arrowImages.forEach(image => {
        image.classList.remove('active');
    });

    const textContainers = document.querySelectorAll('.kimutatasButtonTextContainer');
    textContainers.forEach(container => {
        container.classList.remove('active');
    });

    // Add active class to the arrow image and container inside the clicked button
    const arrowImage = button.querySelector('.kimutatasButtonArrowContainer');
    if (arrowImage) {
        arrowImage.classList.add('active');
    }

    const textContainer = button.querySelector('.kimutatasButtonTextContainer');
    if (textContainer) {
        textContainer.classList.add('active');
    }
}


// Initial content display setup
window.onload = function() {
    showContent('content1', document.querySelectorAll('.kimutatasNavButtonContainer')[1]); // Show the first content section by default
};

//hover chartImage
// document.addEventListener('DOMContentLoaded', () => {
//     const chartImages = document.querySelectorAll('.chartImage');
//     const tooltip = document.getElementById('tooltip');
//     const marginLeft = 10; // Minimum left margin to keep the tooltip on the screen

//     chartImages.forEach(chartImage => {
//         // Function to update tooltip position
//         const updateTooltipPosition = (pageX, pageY) => {
//             let tooltipX = pageX - 85; // Offset to avoid overlapping the cursor/touch point
//             const tooltipY = pageY - 75; // Offset to avoid overlapping the cursor/touch point

//             // Prevent tooltip from going off the left side of the screen
//             if (tooltipX < marginLeft) {
//                 tooltipX = marginLeft;
//             }

//             tooltip.style.left = `${tooltipX}px`;
//             tooltip.style.top = `${tooltipY}px`;
//         };

//         // Mouse events
//         chartImage.addEventListener('mouseover', (event) => {
//             const containerWidth = chartImage.parentElement.offsetWidth;
//             const imageWidth = parseFloat(window.getComputedStyle(chartImage).width);
//             const widthPercentage = (imageWidth / containerWidth) * 100;
//             tooltip.textContent = `Érték: ${widthPercentage.toFixed(0)}%`;
//             tooltip.style.display = 'block';
//         });

//         chartImage.addEventListener('mouseout', () => {
//             tooltip.style.display = 'none';
//         });

//         chartImage.addEventListener('mousemove', (event) => {
//             updateTooltipPosition(event.pageX, event.pageY);
//         });

//         // Touch events
//         chartImage.addEventListener('touchstart', (event) => {
//             const touch = event.touches[0];
//             const containerWidth = chartImage.parentElement.offsetWidth;
//             const imageWidth = parseFloat(window.getComputedStyle(chartImage).width);
//             const widthPercentage = (imageWidth / containerWidth) * 100;
//             tooltip.textContent = `Érték: ${widthPercentage.toFixed(0)}%`;
//             tooltip.style.display = 'block';
//             updateTooltipPosition(touch.pageX, touch.pageY);
//         });

//         chartImage.addEventListener('touchmove', (event) => {
//             const touch = event.touches[0];
//             updateTooltipPosition(touch.pageX, touch.pageY);
//         });

//         chartImage.addEventListener('touchend', () => {
//             tooltip.style.display = 'none';
//         });
//     });
// });


/////////////////////////////////////////////////////////////////////////////////chart js

const greenCtx = document.getElementById('myChartGreen').getContext('2d');
const redCtx = document.getElementById('myChartRed').getContext('2d');
const blueCtx = document.getElementById('myChartBlue').getContext('2d');

const backgroundPlugin = {
    id: 'customBackground',
    beforeDraw: (chart) => {
        const { ctx, chartArea: { left, right, top, bottom, width, height }, scales: { x } } = chart;
        const fiftyPercent = x.getPixelForValue(50);
        const eightyPercent = x.getPixelForValue(80);

        ctx.save();
        ctx.fillStyle = 'white';
        ctx.fillRect(left, top, fiftyPercent - left, height);
        ctx.fillStyle = 'lightgrey';
        ctx.fillRect(fiftyPercent, top, eightyPercent - fiftyPercent, height);
        ctx.fillStyle = 'grey';
        ctx.fillRect(eightyPercent, top, right - eightyPercent, height);
        ctx.restore();
    }
};

Chart.register(backgroundPlugin);

function createChart(ctx, color) {
    const chartWidth = ctx.canvas.clientWidth;
    const datasets = [{
        label: 'eredményed',
        data: [100, 19, 30],
        borderWidth: 1,
        backgroundColor: color === 'green' ? '#acbc73' : color === 'red' ? '#dc827e' : '#429dc7',
        borderColor: color === 'green' ? '#0C594B' : color === 'red' ? '#681300' : '#2c4e7d',
        borderWidth: 1
    }, {
        label: 'csoporteredmény',
        data: [10, 90, 39],
        borderWidth: 1,
        backgroundColor: color === 'green' ? '#92c58b' : color === 'red' ? '#a13030' : '#64a2e7',
        borderColor: color === 'green' ? '#0C594B' : color === 'red' ? '#681300' : '#2c4e7d',
        borderWidth: 1
    }, {
        label: 'országos átlag',
        data: [75, 50, 1],
        borderWidth: 1,
        backgroundColor: color === 'green' ? '#a6bb88' : color === 'red' ? '#953247' : '#2c4e7d',
        borderColor: color === 'green' ? '#0C594B' :  color === 'red' ? '#681300' : '#2c4e7d',
        borderWidth: 1
    }];

    const barThickness = chartWidth < 500 ? 50 : 15;
    const fontSize = chartWidth < 500 ? 14 : 24;

    return new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Munkakörülmények', 'Fejlődés, karrier', 'Munkaérték'],
            datasets: datasets
        },
        options: {
            indexAxis: 'y',
            scales: {
                x: {
                    beginAtZero: true,
                    max: 100
                },
                y: {
                    ticks: {
                        font: {
                            size: fontSize
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        font: {
                            family: "'Alata-Regular', sans-serif",
                            size: fontSize,
                            color: '#0C594B',
                        }
                    }
                },
                datalabels: {
                    anchor: 'end',
                    align: 'end',
                    color: '#000000',
                    font: {
                        family: "'Alata-Regular', sans-serif",
                        size: fontSize,
                    }
                }
            },
            elements: {
                bar: {
                    barThickness: barThickness
                }
            },
            transitions: {
                show: {
                    animations: {
                        x: {
                            from: 0
                        },
                    }
                },
                hide: {
                    animations: {
                        x: {
                            to: 0
                        },
                    }
                }
            }
        }
    });
}

let greenChart = createChart(greenCtx, 'green');
let redChart = createChart(redCtx, 'red');
let blueChart = createChart(blueCtx, 'blue');

window.addEventListener('resize', () => {
    greenChart.destroy();
    redChart.destroy(); 
    blueChart.destroy();
    greenChart = createChart(greenCtx, 'green');
    redChart = createChart(redCtx, 'red');
    blueChart = createChart(blueCtx, 'blue');
});
