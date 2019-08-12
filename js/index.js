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



// mouseenter and mouseleave event // prevent default method

function skewAndReverse() {
  const navLinks = document.querySelectorAll('.nav .nav-link')

  // prevent default
  navLinks.forEach(link => link.addEventListener('click', e => {
    e.preventDefault()
  }))

  navLinks.forEach(link => link.addEventListener('mouseenter', e => {
    e.target.classList.toggle('skew')
  }))

  navLinks.forEach(link => link.addEventListener('mouseleave', e => {
    e.target.classList.toggle('skew')
  }))
}

skewAndReverse()



// keydown event

function createPopUpOnKey(){
  document.addEventListener('keydown', e => {
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
      btn.addEventListener('dblclick', () => {
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



// copy to clipboard event

function copyAlert() {
  window.addEventListener('copy', () => {
    alert(`You just copied something to your clipboard!`)
  })
}

copyAlert();



// scroll and animationend events

function slideOnScroll() {
  window.addEventListener('scroll', () => {
    // get boxes that will slide
    const boxes = document.querySelectorAll('.img-content img')

    // add scroll animation to each when window is scrolled
    boxes.forEach(box => {
      box.style.animation = `slideIn 1s ease-out 1s`
    })

    // rotate boxes when animation is ended
    boxes.forEach(box => {
      box.addEventListener('animationend', () => {
        box.style.transform = `rotate(8deg)`
      })
    })

    // reset animation after 5 seconds
    window.setTimeout(() => {
      boxes.forEach(box => {
        box.style.animation = ``
      })
    }, 5000)
  })
}

slideOnScroll()

// drag start event

function dragAlert() {
  window.addEventListener('dragstart', () => {
    alert(`Hey! Where are you going with that??`)
  })
}

dragAlert()

// click event with propagation

function stopProp() {
  const intro = document.querySelector('.content-section')
  const subHeading = document.querySelector('.content-section .text-content h2')

  subHeading.addEventListener('click', e => {
    e.target.style.backgroundColor = 'red'
    e.stopPropagation()
  })

  intro.addEventListener("click", e => {
    e.target.style.backgroundColor = 'blue'
  })
}

stopProp()