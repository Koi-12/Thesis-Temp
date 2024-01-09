setInterval(function () {
    const overlay = document.querySelector('.overlay');
    const overlayTwo = document.querySelector('.overlay--two');
    
    const show = document.querySelector('span[data-show]')
      
    const next = show.nextElementSibling || document.querySelector('span:first-of-type')
    const up = document.querySelector('span[data-up]')
    
    if (up) {
      up.removeAttribute('data-up')
    }
    
    // pick bigger value
    let overlayWidth = Math.max(show.clientWidth, next.clientWidth);
    
    let overlayBackground = window.getComputedStyle(next).getPropertyValue('background-image');
    let overlayTwoBackground = window.getComputedStyle(show).getPropertyValue('background-image');
    
    overlay.style.width = overlayWidth + 'px';
    overlay.style.backgroundImage = overlayBackground;
    
    overlayTwo.style.width = overlayWidth + 'px';
    overlayTwo.style.backgroundImage = overlayTwoBackground;
    
    overlay.classList.add('visible');
    overlayTwo.classList.add('visible');
    
    window.setTimeout(() => {
    
      show.removeAttribute('data-show')
      show.setAttribute('data-up', '')
  
      next.setAttribute('data-show', '')
    
    }, 500);
    
    window.setTimeout(() => {
    
      overlay.classList.remove('visible');
      overlayTwo.classList.remove('visible');
    
    }, 1000);
    
  }, 2000)