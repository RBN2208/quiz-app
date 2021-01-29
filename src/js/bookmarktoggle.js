const bookmarkSigns = document.querySelectorAll('[data-js="bookmarkSign"]')

bookmarkSigns.forEach(sign => {
  sign.addEventListener('click', () => {
    sign.classList.toggle('marked')
  })
})
