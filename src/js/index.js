// answer-toggle
const cards = getAllByDataJs('cards')

// form-counter and no reset
const formEl = getByDataJs('formElement')
const textareaQuestion = getByDataJs('inputbox')
const labels = getAllByDataJs('inputLabels')

// bookmark toggle
const bookmarkSigns = getAllByDataJs('bookmarkSign')

// darkmode
const darkmodeButton = getByDataJs('darkmodeButton')

const body = getByDataJs('mainBody')
const header = getByDataJs('headerBox')
const content = getByDataJs('contentBox')
const footer = getByDataJs('footerBox')
const profilInfo = getByDataJs('profilInfo')
const cardHeader = getByDataJs('cardHeadline')

// function for answer-toggle
cards.forEach(card => {
  const button = getByDataJs('answerButton', card)
  const answer = getByDataJs('answerBox', card)

  button.addEventListener('click', () => {
    answer.classList.toggle('hidden')
  })
})

// form counter and no reset
labels.forEach(label => {
  const textarea = getByDataJs('inputbox', label)
  const counter = getByDataJs('counter', label)
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
    const textarea = getByDataJs('inputbox', label)
    const counter = getByDataJs('counter', label)
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
    let textInputbox = getByDataJs('inputbox', label)
    let counterDark = getByDataJs('counter', label)

    counterDark.classList.toggle('counter--dark')
    textInputbox.classList.toggle('create__input--dark')
  })

  cards.forEach(card => {
    let cardHeader = getByDataJs('cardHeadline', card)
    let answerBox = getByDataJs('answerBox', card)

    cardHeader.classList.toggle('quizcard__headline--dark')
    card.classList.toggle('quizcard__card--dark')
    answerBox.classList.toggle('answerBox--dark')
  })
})

function getByDataJs(dataJsName, target = document) {
  return target.querySelector(`[data-js="${dataJsName}"]`)
}

function getAllByDataJs(dataJsName, target = document) {
  return target.querySelectorAll(`[data-js="${dataJsName}"]`)
}

/*
// function for data-js import - this is not a variable version
function getElement(dataJsName) {
  return document.querySelector(`[data-js="${dataJsName}"]`)
}
*/
