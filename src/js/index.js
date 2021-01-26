const sIndex = document.querySelector('[data-js=siteIndex]')
const sBook = document.querySelector('[data-js=siteBook]')
const sCreate = document.querySelector('[data-js=siteCreate]')
const sProfile = document.querySelector('[data-js=siteProfile]')

const butIndex = document.querySelector('[data-js=buttonIndex]')
const butBook = document.querySelector('[data-js=buttonBook]')
const butCreate = document.querySelector('[data-js=buttonCreate]')
const butProfile = document.querySelector('[data-js=buttonProfile]')

butIndex.addEventListener('click', () => {
  sIndex.hidden = false
  sBook.hidden = true
  sCreate.hidden = true
  sProfile.hidden = true
  butIndex.classList.add('current__link')
  butBook.classList.remove('current__link')
  butCreate.classList.remove('current__link')
  butProfile.classList.remove('current__link')
})

butBook.addEventListener('click', () => {
  sIndex.hidden = true
  sBook.hidden = false
  sCreate.hidden = true
  sProfile.hidden = true
  butIndex.classList.remove('current__link')
  butBook.classList.add('current__link')
  butCreate.classList.remove('current__link')
  butProfile.classList.remove('current__link')
})

butCreate.addEventListener('click', () => {
  sIndex.hidden = true
  sBook.hidden = true
  sCreate.hidden = false
  sProfile.hidden = true
  butIndex.classList.remove('current__link')
  butBook.classList.remove('current__link')
  butCreate.classList.add('current__link')
  butProfile.classList.remove('current__link')
})

butProfile.addEventListener('click', () => {
  sIndex.hidden = true
  sBook.hidden = true
  sCreate.hidden = true
  sProfile.hidden = false
  butIndex.classList.remove('current__link')
  butBook.classList.remove('current__link')
  butCreate.classList.remove('current__link')
  butProfile.classList.add('current__link')
})
