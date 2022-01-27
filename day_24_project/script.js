const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profileImg = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const bg_texts = document.querySelector('.animated-bg-text')

function getData() {
    header.innerHTML = `
        <img src="https://images.unsplash.com/photo-1643208589890-39b06aaff781?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" alt="">
    `
    title.innerHTML = `
        Lorem ipsum dolor sit amet
    `
    excerpt.innerHTML = `
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, modi.
    `
    profileImg.innerHTML = `
        <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">
    `
    name.innerHTML = `
        John Doe
    `
    date.innerHTML = `
        Oct 8, 2020
    `
    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'))
}

setTimeout(() => getData(), 2000)