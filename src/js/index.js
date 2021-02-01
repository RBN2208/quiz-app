// answer-toggle
const cards = document.querySelectorAll('[data-js="cards"]')

// form-counter and no reset
const formEl = getElement('formElement')
const textareaQuestion = getElement('inputbox')
const labels = document.querySelectorAll('[data-js="inputLabels"]')

// bookmark toggle
const bookmarkSigns = document.querySelectorAll('[data-js="bookmarkSign"]')

// darkmode
const darkmodeButton = getElement('darkmodeButton')

const body = getElement('mainBody')
const header = getElement('headerBox')
const content = getElement('contentBox')
const footer = getElement('footerBox')
const profilInfo = getElement('profilInfo')
const cardHeader = getElement('cardHeadline')

// function for answer-toggle
cards.forEach(card => {
  const button = card.querySelector('[data-js="answerButton"]')
  const answer = card.querySelector('[data-js="answerBox"]')

  button.addEventListener('click', () => {
    answer.classList.toggle('hidden')
  })
})

// form counter and no reset
labels.forEach(label => {
  const textarea = label.querySelector('[data-js="inputbox"]')
  const counter = label.querySelector('[data-js="counter"]')
  textarea.addEventListener('input', event => {
    counter.textContent = `${event.currentTarget.value.length}/${textarea.maxLength}`
  })
})

formEl.addEventListener('submit', event => {
  event.preventDefault()
  console.log(event)
  formEl.reset()
  textareaQuestion.focus()
  labels.forEach(label => {
    const textarea = label.querySelector('[data-js="inputbox"]')
    const counter = label.querySelector('[data-js="counter"]')
    counter.textContent = `0/${textarea.maxLength}`
  })
})

// bookmark toggle
bookmarkSigns.forEach(sign => {
  sign.addEventListener('click', () => {
    sign.classList.toggle('marked')
  })
})

// darkmode functions
darkmodeButton.addEventListener('click', () => {
  body.classList.toggle('app-grid--dark')
  header.classList.toggle('header--dark')
  content.classList.toggle('content--dark')
  footer.classList.toggle('footer--dark')
  profilInfo.classList.toggle('profil__info--dark')

  labels.forEach(label => {
    let textInputbox = label.querySelector('[data-js="inputbox"]')
    let counterDark = label.querySelector('[data-js="counter"]')

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

// function for data-js import
function getElement(dataJsName) {
  return document.querySelector(`[data-js="${dataJsName}"]`)
}
