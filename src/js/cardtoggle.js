const cards = document.querySelectorAll('[data-js="cards"]')

cards.forEach(card => {
  const button = card.querySelector('[data-js="answerButton"]')
  const answer = card.querySelector('[data-js="answerBox"]')

  button.addEventListener('click', () => {
    answer.classList.toggle('hidden')
  })
})
