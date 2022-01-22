const hourElement = document.querySelector('.hour');
const minuteElement = document.querySelector('.minute');
const secondElement = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggle = document.querySelector('.toggle');
const handPositionTranslate = 'translate(-50%, -100%)';

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

toggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    const currentMode = toggle.innerText;
    toggle.innerText = (currentMode == "Dark Mode" ? "Light Mode" : "Dark Mode");
})

function setTime() {
    const time = new Date();
    const month = time.getMonth();
    const dayOfWeek = time.getDay();
    const day = time.getDate();
    const hours = time.getHours();
    const hoursForClock = hours % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hourElement.style.transform = `${handPositionTranslate} rotate(${hours / 12 * 360}deg)`
    minuteElement.style.transform = `${handPositionTranslate} rotate(${minutes / 60 * 360}deg)`
    secondElement.style.transform = `${handPositionTranslate} rotate(${seconds / 60 * 360}deg)`
    
    timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0:${minutes}` : minutes} ${ampm}`;

    dateEl.innerHTML = `${days[dayOfWeek]}, ${months[month]} <span class="circle">${day}</span>`
}

setInterval(setTime, 1000);