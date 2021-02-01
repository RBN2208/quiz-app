import getByDataJs from './getByDataJs'
import getAllByDataJs from './getAllByDataJs'

export default function darkmode() {
  const darkmodeButton = getByDataJs('darkmodeButton')

  const body = getByDataJs('mainBody')
  const header = getByDataJs('headerBox')
  const content = getByDataJs('contentBox')
  const footer = getByDataJs('footerBox')
  const profilInfo = getByDataJs('profilInfo')
  const submitButton = getByDataJs('submitButton')
  const labels = getAllByDataJs('inputLabels')
  const cards = getAllByDataJs('cards')

  darkmodeButton.addEventListener('click', () => {
    body.classList.toggle('app-grid--dark')
    header.classList.toggle('header--dark')
    content.classList.toggle('content--dark')
    footer.classList.toggle('footer--dark')
    profilInfo.classList.toggle('profil__info--dark')
    submitButton.classList.toggle('create__submit--dark')

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
}
