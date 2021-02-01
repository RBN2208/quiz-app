import getAllByDataJs from './getAllByDataJs'
import getByDataJs from './getByDataJs'

export default function cards() {
  const cards = getAllByDataJs('cards')

  cards.forEach(card => {
    const button = getByDataJs('answerButton', card)
    const answer = getByDataJs('answerBox', card)

    button.addEventListener('click', () => {
      answer.classList.toggle('hidden')
    })
  })
}
