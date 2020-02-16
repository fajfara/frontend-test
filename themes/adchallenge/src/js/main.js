import initEvents from './events/_main';

initEvents();

document.addEventListener('load', () => {
  console.log("js loaded");
  // init events
  initEvents();

})

