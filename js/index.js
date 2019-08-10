// mousedown and mouseup event
function shrinkAndGrow() {
  const logo = document.querySelector('.logo-heading')
  
  logo.addEventListener('mousedown', event => {
    event.target.style.animation = `shrinkAndGrow .3s ease forwards`
  })
  
  logo.addEventListener('mouseup', event => {
    event.target.style.animation = ``
  })
}

shrinkAndGrow()

// mouseenter and mouseleave event


function skewAndReverse() {
  const navLinks = document.querySelectorAll('.nav .nav-link')

  navLinks.forEach(link => link.addEventListener('mouseenter', (e) => {
    e.target.classList.toggle('skew')
  }))

  navLinks.forEach(link => link.addEventListener('mouseleave', (e) => {
    e.target.classList.toggle('skew')
  }))
}

skewAndReverse()

// keydown event

function createPopUpOnKey(){
  document.addEventListener('keydown', (e) => {
    function createPopUp() {
      // create element and add popup class to it
      const popUp = document.createElement('div')
      popUp.className = 'popup'
      
      // add text to the div to indicate which key was pressed
      const textContent = document.createTextNode(`You just pressed the ${e.key} key!`)
      
      // add element to the DOM under the navigation
      const nav = document.querySelector('.main-navigation')
      nav.appendChild(popUp)
      popUp.appendChild(textContent)
      console.log(popUp.textContent)
  
      
      // remove element from the DOM after 2 seconds
      window.setTimeout(() => {
        nav.removeChild(popUp)
      }, 2000)
    }
    
    createPopUp()
  })
}

createPopUpOnKey()

// double click event

function growOnDoubleClick() {
  // get buttons and picture to listen for events
  const buttons = document.querySelectorAll('.btn')
  const picture = document.querySelector('.content-destination img')

  // add double click event listener to each button
  function eventHandler(buttons, picture) {
    buttons.forEach(btn => {
      btn.addEventListener('dblclick', e => {
        // grow picture when button is double clicked
        picture.style.transform = `scale(1.5)`

        // return scale to 1 after 2 seconds
        window.setTimeout(() => {
          picture.style.transform = `scale(1)`;
        }, 2000);
      })
    })
    
  }

  eventHandler(buttons, picture)
}

growOnDoubleClick()