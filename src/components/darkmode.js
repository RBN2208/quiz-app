import getByDataJs from '../js/getByDataJs'
import getAllByDataJs from '../js/getAllByDataJs'

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
      const textInputbox = getByDataJs('inputbox', label)
      const counterDark = getByDataJs('counter', label)

      counterDark.classList.toggle('counter--dark')
      textInputbox.classList.toggle('create__input--dark')
    })

    cards.forEach(card => {
      const cardHeader = getByDataJs('cardHeadline', card)
      const answerBox = getByDataJs('answerBox', card)

      cardHeader.classList.toggle('quizcard__headline--dark')
      card.classList.toggle('quizcard__card--dark')
      answerBox.classList.toggle('answerBox--dark')
    })
  })
}
