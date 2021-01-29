const formEl = getElement('formElement')
const formQuestion = getElement('formQuestion')
const formAnswer = getElement('formAnswer')
const formTags = getElement('formTags')

formEl.addEventListener('submit', event => {
  event.preventDefault()
  console.log(event)
  formEl.reset()
  formQuestion.focus()
})

function getElement(dataJsName) {
  return document.querySelector(`[data-js="${dataJsName}"]`)
}
