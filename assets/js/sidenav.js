document.addEventListener("DOMContentLoaded", () => {
    let sidenaveOpen = document.querySelector('a.hamburger');
    sidenaveOpen.onclick = (e) => {
      e.preventDefault();
      document.querySelector('div.sidenav-contents').classList.remove('close-sidenav')
    }
  
    let sidenavClose =  document.querySelector('a.close')
    sidenavClose.onclick = (e) => {
      e.preventDefault();
      document.querySelector('div.sidenav-contents').classList.add('close-sidenav')
      document.querySelector('.sidenav-wrapper').style.visibiltiy = "invisible";
    } 
    
    
    setTimeout(() => {
      document.querySelector('div.message-popup').classList.add('remove-message-popup')
    }, 6000)
  })
