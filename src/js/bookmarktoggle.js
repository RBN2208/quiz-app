const bookmarkSigns = getallBookmarks('bookmarkSign')

bookmarksSigns.forEach(bookmarkSign => {
  const toggleButton = bookmarkSign.getElement('bookmarkSign')
  const toggleColor = bookmarkSign.getElement('bookmarkSign')

  toggleButton.addEventListener('click', () => {
    toggleColor.classList.toggle('marked')
  })
})

function getElement(dataJsName) {
  return document.querySelector(`[data-js="${dataJsName}"]`)
}

function getallBookmarks(dataJsName) {
  return document.querySelectorAll(`[data-js="${dataJsName}"]`)
}
