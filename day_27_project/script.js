const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages  = [
    'Message one',
    'Message two',
    'Message three',
    'Message four',
];

button.addEventListener('click', () => {
    createNotification()
});

function createNotification() {   
    const notif = document.createElement('div');
    notif.classList.add('toast');
    notif.innerHTML = getRandomMessage();
    toasts.appendChild(notif);
    setTimeout(() => {
        toasts.removeChild(notif)
    }, 2000)
}

function getRandomMessage() {
    return messages[Math.floor(Math.random()* messages.length)]
}