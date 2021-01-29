cards.forEach(card => {
  const button = card.querySelector('[data-js="button"]')
  const answer = card.querySelector('[data-js="answer"]')

  button.addEventListener('click', () => {
    answer.classList.toggle('hidden')
  })
})
