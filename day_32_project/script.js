// This project is interesting because it shows an important part of using HTML input elements
// HTML input elements are useful for storing state 

const toggles = document.querySelectorAll('.toggle')
const good = document.getElementById('good')
const cheap = document.getElementById('cheap')
const fast = document.getElementById('fast')

toggles.forEach((toggle) => {
    toggle.addEventListener('change', (e) => doTheTrick(e.target))
})

function doTheTrick(theClickedOne) {
    if (good.checked && fast.checked && cheap.checked) {
        if (good === theClickedOne) {
            cheap.checked = false
        } else if (fast === theClickedOne) {
            good.checked = false 
        } else {
            fast.checked = false
        }
    }
}