/* eslint-disable no-unused-expressions */
// Original Sources: https://codepen.io/marianarlt/pen/WjGeMM
// Add the event handler to the document body and all of its children.
// 'wheel' is widely supported but you still might want to maximize
// compatibility by testing for it. There's a good solution on
// http://stackoverflow.com/a/32215631
document.body.addEventListener('wheel', doMagic)

// The following function is based on my structural ideas of a One Page Website and if you get the idea it's really trivial to adjust it to yours.
const tags = ['HEADER', 'SECTION', 'FOOTER'];

//added variables added to the new version
const navActiveClasses = ['active','h-4','w-4','opacity-100', 'ml-[-2px]'];
const passiveNavClasses = ['h-3', 'w-3', 'opacity-50', 'ml-0'];
const justScroll = (e, target) => {
  scrollIt(
    target,
    800,
    'easeInOutQuad'
  )
  e.target.closest(tags).classList.remove('show')
  target.classList.add('show');
  const targetElem = `#${target.id}`;

  const activeButton = document.querySelector('nav button.active');
  activeButton.classList.remove(...navActiveClasses)
  activeButton.classList.add(...passiveNavClasses)

  const targetBtn = document.querySelector(`nav button[data-target="${targetElem}"]`);
  targetBtn.classList.remove(...passiveNavClasses);
  targetBtn.classList.add(...navActiveClasses);
}

function doMagic(e) {
  // Store your top level full page element tags in a variable.
  // This is to have control over your structure and
  // to avoid <script> tags from being included in the process.
  // These need to be uppercase as .nodeName returns that way
  // var tags = ['HEADER', 'SECTION', 'FOOTER'] // Put it out of the function to feed the mobile version

  // Test for the DOM element the wheel event was fired on
  // and store the next page section for later use.
  if (tags.includes(e.target.nodeName)) {
    // Element is one of our top level structure tags.
    // Get its adjacent siblings.
    var next = e.target.nextElementSibling,
        prev = e.target.previousElementSibling;
  } else { // If it's rather a child go up the DOM tree
           // until we meet one of our top level tags
           // and get the siblings from there.
           // .closest() is quite well supported but far from 100%
           // http://stackoverflow.com/a/42873108 provides a solution
           // for a compatibility fix
    var next = e.target.closest(tags).nextElementSibling,
        prev = e.target.closest(tags).previousElementSibling
  }

  if (e.deltaY < 0) { // Wheel scrolled up
    // Block native scroll:
    e.preventDefault
    // Make sure that the sibling element is one
    // of our top structure tags.
    // May not be necessary but I've had weird behaviours
    // with <script> tags and you might want to exclude things.
    if (tags.includes(prev.nodeName)) {
      justScroll(e, prev);
    }
  } else if (e.deltaY > 0) { // Wheel scrolled down
    // Just the same as before but with the following adjacent sibling.
    e.preventDefault
    if (tags.includes(next.nodeName)) {
      justScroll(e, next);
    }
  } else {
    return false
  }
}

// Added to Mobile version
// 2022-02-10 @Londrack
var swdir,
    sX,
    sY,
    dX,
    dY,
    tchs,
    threshold = 100,
    /*[min distance traveled to be considered swipe]*/
    slack = 50,
    /*[max distance allowed at the same time in perpendicular direction]*/
    alT = 500,
    /*[max time allowed to travel that distance]*/
    elT, /*[elapsed time]*/
    stT; /*[start time]*/

const doMagicMobile = e => {
  if(e.type === 'touchmove'){
    e.preventDefault();
    return false;
  }
  else if(e.type === 'touchstart'){
    tchs = e.changedTouches[0];
    swdir = 'none';
    sX = tchs.pageX;
    sY = tchs.pageY;
    stT = new Date().getTime();
  }
  else if(e.type === 'touchend'){
    tchs = e.changedTouches[0];
    dX = tchs.pageX - sX;
    dY = tchs.pageY - sY;
    elT = new Date().getTime() - stT;
    var scdir = false;

    if (elT <= alT) {
      if (Math.abs(dX) >= threshold && Math.abs(dY) <= slack) {
        swdir = (dX < 0) ? 'left' : 'right';
      } else if (Math.abs(dY) >= threshold && Math.abs(dX) <= slack) {
        swdir = (dY < 0) ? 'up' : 'down';
      }
      if (swdir === 'up') {
        scdir = swdir;
      } else if (swdir === 'down') {
        scdir = swdir;
      }
      e.stopPropagation();
    }
  }

  if (tags.includes(e.target.nodeName)) {
    var next = e.target.nextElementSibling,
        prev = e.target.previousElementSibling;
  } else {
    var next = e.target.closest(tags).nextElementSibling,
        prev = e.target.closest(tags).previousElementSibling
  }

  if (scdir === 'down') {
    e.preventDefault
    if (tags.includes(prev.nodeName)) {
      justScroll(e, prev);
    }
  } else if (scdir === 'up') { //scroll Down
    e.preventDefault
    if (tags.includes(next.nodeName)) {
      justScroll(e, next);
    }
  } else {
    return false
  }
}

export const initMagicMobile = () => {
    const well = document.getElementById('well');
    well.addEventListener('touchmove', doMagicMobile, false);
    well.addEventListener('touchstart', doMagicMobile, false);
    well.addEventListener('touchend', doMagicMobile, false);
}

// Original Sources: https://codepen.io/pawelgrzybek/pen/ZeomJB
/**
 *
 * @param {(number|HTMLElement)} destination - Destination to scroll to (DOM element or number)
 * @param {number} duration - Duration of scrolling animation
 * @param {string} easing - Timing function name (Allowed values: 'linear', 'easeInQuad', 'easeOutQuad', 'easeInOutQuad', 'easeInCubic', 'easeOutCubic', 'easeInOutCubic', 'easeInQuart', 'easeOutQuart', 'easeInOutQuart', 'easeInQuint', 'easeOutQuint', 'easeInOutQuint')
 * @param {function} callback - Optional callback invoked after animation
 */
 export function scrollIt(destination, duration = 200, easing = 'linear', callback) {

    // Predefine list of available timing functions
    // If you need more, tween js is full of great examples
    // https://github.com/tweenjs/tween.js/blob/master/src/Tween.js#L421-L737
    const easings = {
      linear(t) {
        return t;
      },
      easeInQuad(t) {
        return t * t;
      },
      easeOutQuad(t) {
        return t * (2 - t);
      },
      easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      },
      easeInCubic(t) {
        return t * t * t;
      },
      easeOutCubic(t) {
        return (--t) * t * t + 1;
      },
      easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      },
      easeInQuart(t) {
        return t * t * t * t;
      },
      easeOutQuart(t) {
        return 1 - (--t) * t * t * t;
      },
      easeInOutQuart(t) {
        return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
      },
      easeInQuint(t) {
        return t * t * t * t * t;
      },
      easeOutQuint(t) {
        return 1 + (--t) * t * t * t * t;
      },
      easeInOutQuint(t) {
        return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
      }
    };
  
  
    // Store initial position of a window and time
    // If performance is not available in your browser
    // It will fallback to new Date().getTime() - thanks IE < 10
    const start = window.pageYOffset;
    const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();
    // const startTime = typeof(window.performance['now']) == 'function' ? performance.now() : new Date().getTime();
  
  
    // Take height of window and document to sesolve max scrollable value
    // Prevent requestAnimationFrame() from scrolling below maximum scollable value
    // Resolve destination type (node or number)
    const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
    const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
    const destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
    const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);
  
  
    // If requestAnimationFrame is not supported
    // Move window to destination position and trigger callback function
    if ('requestAnimationFrame' in window === false) {
      window.scroll(0, destinationOffsetToScroll);
      if (callback) {
        callback();
      }
      return;
    }
  
  
    // function resolves position of a window and moves to exact amount of pixels
    // Resolved by calculating delta and timing function choosen by user
    function scroll() {
      const now = 'now' in window.performance ? performance.now() : new Date().getTime();
      const time = Math.min(1, ((now - startTime) / duration));
      const timeFunction = easings[easing](time);
      window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));
  
      // Stop requesting animation when window reached its destination
      // And run a callback function
      if (window.pageYOffset === destinationOffsetToScroll) {
        if (callback) {
          callback();
        }
        return;
      }
  
      // If window still needs to scroll to reach destination
      // Request another scroll invokation
      requestAnimationFrame(scroll);
    }
  
  
    // Invoke scroll and sequential requestAnimationFrame
    scroll();
  }
  