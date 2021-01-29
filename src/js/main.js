const { doc } = require('prettier')

const sIndex = getElement('siteIndex')
const sBook = getElement('siteBook')
const sCreate = getElement('siteCreate')
const sProfile = getElement('siteProfile')

const butIndex = getElement('buttonIndex')
const butBook = getElement('buttonBook')
const butCreate = getElement('buttonCreate')
const butProfile = getElement('buttonProfile')

const bookSign = getElement('bookmarkSign')

butIndex.addEventListener('click', showIndex)

function showIndex() {
  butIndex.addEventListener('click', () => {
    const dontShow = ['sBook', 'sCreate', 'sProfile']
    dontShow.forEach(site => {
      dontShow.hidden = true
      sIndex.hidden = false
    })
  })
}

function getElement(dataJsName) {
  return document.querySelector(`[data-js="${dataJsName}"]`)
}
