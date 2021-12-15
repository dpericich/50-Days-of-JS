const buttons = document.querySelectorAll('.faq-toggle');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        resetAllCards();
        button.parentNode.classList.add('active');
    })
})

function resetAllCards() {
    buttons.forEach(button => {
        button.parentNode.classList.remove('active')
    })
}