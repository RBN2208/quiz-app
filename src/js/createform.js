import getAllByDataJs from './getAllByDataJs'
import getByDataJs from './getByDataJs'

export default function fromElemet() {
  const formEl = getByDataJs('formElement')
  const textareaQuestion = getByDataJs('inputbox')
  const labels = getAllByDataJs('inputLabels')

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
}
