export default function scrollEvent() {
  /*
  * Main scroll function
  * */

  // varibales
  const header = document.querySelector('header');

  // on load check the scroll position
  handleHeaderScroll(window.scrollY);

  document.addEventListener('scroll', () => {
    handleHeaderScroll(window.scrollY);
  })

  // header add class on scroll
  function handleHeaderScroll(windowY) {
    if(windowY) {
      header.classList.add('scroll');
    } else {
      header.classList.remove('scroll');
    }

  }
}


