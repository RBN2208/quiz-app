const formEl = getElement('formElement')
const textareaQuestion = getElement('formQuestion')
const textareaAnswer = getElement('formAnswer')
const textareaTags = getElement('formTags')

const questionCounter = getElement('qCounter')
const answerCounter = getElement('aCounter')
const tagCounters = getElement('tagCounter')

textareaQuestion.addEventListener('input', event => {
  const qcounter = document.querySelector('[data-js="qCounter"]')
  qcounter.textContent = `${event.currentTarget.value.length}/200`
})

textareaAnswer.addEventListener('input', event => {
  const acounter = document.querySelector('[data-js="aCounter"]')
  acounter.textContent = `${event.currentTarget.value.length}/200`
})

textareaTags.addEventListener('input', event => {
  const tcounter = document.querySelector('[data-js="tagCounter"]')
  tcounter.textContent = `${event.currentTarget.value.length}/50`
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
