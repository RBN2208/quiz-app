import getAllByDataJs from '../js/getAllByDataJs'

export default function navigation() {
  const pages = getAllByDataJs('page')
  const naviButtons = getAllByDataJs('nav')
  const headLines = getAllByDataJs('headline')

  naviButtons.forEach(button => {
    const clickedButtonName = button.dataset.name
    button.addEventListener('click', () => {
      pages.forEach(page => {
        const pageName = page.dataset.name
        page.classList.toggle('hidden', clickedButtonName !== pageName)
      })
      naviButtons.forEach(button => {
        button.classList.toggle(
          'current__link',
          clickedButtonName === button.dataset.name
        )
      })
      headLines.forEach(headline => {
        const headings = headline.dataset.name
        headline.classList.toggle('hidden', clickedButtonName !== headings)
      })
    })
  })
}
