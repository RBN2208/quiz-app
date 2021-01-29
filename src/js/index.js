// constanten
const cards = document.querySelectorAll('[data-js="cards"]')

const formEl = getElement('formElement')
const textareaQuestion = getElement('inputbox')
const labels = document.querySelectorAll('[data-js="inputLabels"]')

const bookmarkSigns = document.querySelectorAll('[data-js="bookmarkSign"]')

// functions
cards.forEach(card => {
  const button = card.querySelector('[data-js="answerButton"]')
  const answer = card.querySelector('[data-js="answerBox"]')

  button.addEventListener('click', () => {
    answer.classList.toggle('hidden')
  })
})

labels.forEach(label => {
  const textarea = label.querySelector('[data-js="inputbox"]')
  const counter = label.querySelector('[data-js="counter"]')
  textarea.addEventListener('input', event => {
    counter.textContent = `${event.currentTarget.value.length}/200`
  })
})

formEl.addEventListener('submit', event => {
  event.preventDefault()
  console.log(event)
  formEl.reset()
  textareaQuestion.focus()
})

bookmarkSigns.forEach(sign => {
  sign.addEventListener('click', () => {
    sign.classList.toggle('marked')
  })
})

// function for data-js import

function getElement(dataJsName) {
  return document.querySelector(`[data-js="${dataJsName}"]`)
}
