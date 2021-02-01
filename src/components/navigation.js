import getByDataJs from '../js/getByDataJs'

export default function navigation() {
  const sIndex = getByDataJs('siteIndex')
  const sBook = getByDataJs('siteBook')
  const sCreate = getByDataJs('siteCreate')
  const sProfile = getByDataJs('siteProfile')

  const butIndex = getByDataJs('buttonIndex')
  const butBook = getByDataJs('buttonBook')
  const butCreate = getByDataJs('buttonCreate')
  const butProfile = getByDataJs('buttonProfile')

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
}
