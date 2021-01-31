const darkmodeButton = getElement('darkmodeButton')

const body = getElement('mainBody')
const header = getElement('headerBox')
const content = getElement('contentBox')
const footer = getElement('footerBox')
const profilInfo = getElement('profilInfo')
const cardHeader = getElement('cardHeadline')

const cards = document.querySelectorAll('[data-js="cards"]')
const inputFields = document.querySelectorAll('[data-js="inputLabels"]')

darkmodeButton.addEventListener('click', () => {
  body.classList.toggle('app-grid--dark')
  header.classList.toggle('header--dark')
  content.classList.toggle('content--dark')
  footer.classList.toggle('footer--dark')
  profilInfo.classList.toggle('profil__info--dark')

  inputFields.forEach(inputbox => {
    let textInputbox = inputbox.querySelector('[data-js="inputbox"]')
    let counterDark = inputbox.querySelector('[data-js="counter"]')

    counterDark.classList.toggle('counter--dark')
    textInputbox.classList.toggle('create__input--dark')
  })

  cards.forEach(card => {
    let cardHeader = card.querySelector('[data-js="cardHeadline"]')
    let answerBox = card.querySelector('[data-js="answerBox"]')

    cardHeader.classList.toggle('quizcard__headline--dark')
    card.classList.toggle('quizcard__card--dark')
    answerBox.classList.toggle('answerBox--dark')
  })
})

function getElement(dataJsName) {
  return document.querySelector(`[data-js="${dataJsName}"]`)
}
