const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn');

generateJoke()

jokeBtn.addEventListener('click', generateJoke)

// Using .then
// function generateJoke() {
//     fetch('https://icanhazdadjoke.com', config)
//         .then(res => res.json())
//         .then(data => {
//             jokeEl.innerText = data.joke
//         })
// }

// Have to mark async function as async
async function generateJoke() {
    const config = {
        headers: {
        'Accept': 'application/json'
        }
    }

    // Have to label async operations with an await
    const response = await fetch('https://icanhazdadjoke.com', config)

    const data = await response.json();

    jokeEl.innerText = data.joke
}
