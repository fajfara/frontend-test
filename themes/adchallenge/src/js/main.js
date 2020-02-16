import initEvents from './events/_main';
import initNavbarJS from './navbar/main.js';

initEvents();

window.onload = () => {
  // init events
  initEvents();
  console.log("FFS")
  // navbar scripts
  initNavbarJS();
}

