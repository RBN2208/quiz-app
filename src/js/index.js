// answer-toggle
const cards = document.querySelectorAll('[data-js="cards"]')

// form-counter and no reset
const formEl = getElement('formElement')
const textareaQuestion = getElement('inputbox')
const labels = document.querySelectorAll('[data-js="inputLabels"]')

// bookmark toggle
const bookmarkSigns = document.querySelectorAll('[data-js="bookmarkSign"]')

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

// function for data-js import
function getElement(dataJsName) {
  return document.querySelector(`[data-js="${dataJsName}"]`)
}
