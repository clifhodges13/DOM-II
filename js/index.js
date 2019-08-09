// click event

const logo = document.querySelector('.logo-heading')

logo.addEventListener('click', () => {
  logo.style.animation = `shrinkAndGrow .3s ease forwards`
})