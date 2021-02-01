import getAllByDataJs from '../js/getAllByDataJs'

export default function bookmarkToggle() {
  const bookmarkSigns = getAllByDataJs('bookmarkSign')

  bookmarkSigns.forEach(sign => {
    sign.addEventListener('click', () => {
      sign.classList.toggle('marked')
    })
  })
}
