const searchButton = document.querySelector('.btn');
const searchInput = document.querySelector('.input');
const searchContainer = document.querySelector('.search');

searchButton.addEventListener('click', () => {
  searchContainer.classList.toggle('active');
  searchInput.focus();
})
