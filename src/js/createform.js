const formEl = getElement('formElement')
const textareaQuestion = getElement('inputbox')

const labels = document.querySelectorAll('[data-js="inputLabels"]')

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

function getElement(dataJsName) {
  return document.querySelector(`[data-js="${dataJsName}"]`)
}
