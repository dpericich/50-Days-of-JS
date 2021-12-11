const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"]

// For each item in sounds array, crate a button element, add a class to it and append it to our container
sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound
    btn.addEventListener('click', () => {
        stopAllAudio()
        document.getElementById(sound).play()
    })

    document.querySelector('.buttons').append(btn)
})

function stopAllAudio() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound);

        song.pause();
        song.currentTime = 0;
    })
}