const bookmarkSigns = document.querySelectorAll('[data-js="bookmarkSign"]')
console.log(bookmarkSigns)

bookmarkSigns.forEach(sign => {
  //const button = document.querySelector('[data-js="bookmarkSign"]')
  sign.addEventListener('click', () => {
    sign.classList.toggle('marked')
  })
})
