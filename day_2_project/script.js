// What is the desired functionality of this?
// Progress dictated by button clicks
// Progress bar moves left to right as 'next' is clicked
// Progress bar moves right to left as 'prev' is clicked
const progress = document.getElementById('progress');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

nextButton.addEventListener('click', () => {
    currentActive++;
    
    if (currentActive > circles.length) {
        currentActive = circles.length;
    }

    update();
})

prevButton.addEventListener('click', () => {
    currentActive--;
    
    if (currentActive < 1) {
        currentActive = 1;
    }

    update();    
})

function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    });

    const actives = document.querySelectorAll('.active');

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    if (currentActive === 1) {
        prevButton.disabled = true;
    } else if (currentActive === circles.length) {
        nextButton.disabled = true;
    } else {
        prevButton.disabled = false;
        nextButton.disabled = false;
    }
}