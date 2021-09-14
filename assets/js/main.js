
// console.log(window.location.host)
// console.log(window.location.href)
// console.log(window.location.hostname)
// console.log(window.location.pathname)


new Glider(document.querySelector('.glider'), {
    slidesToShow:1,
    slidedToScroll:1,
    draggable:true,
    dots:"#dots",
    arrows:{
        prev:'.glider-prev',
        next:'.glider-next'
    },
    responsive: [
        {
          // screens greater than >= 775px
          breakpoint: 775,
          settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: 'auto',
            slidesToScroll: 'auto',
            itemWidth: 450,
            duration: 0.25
          }
        },{
          // screens greater than >= 1024px
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            itemWidth: 150,
            duration: 0.25
          }
        }
      ]
})

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.querySelector('div.message-popup').classList.add('remove-message-popup')
  }, 6000)

  let authenticate = document.querySelector('div.authenticate');

  let authenticateUsername = document.querySelector('div.authenticate input.username').value
  let authenticatePassword = document.querySelector('div.authenticate input.password').value


  let authenticateBtn = document.querySelector('div.authenticate button.submit-auth');

  authenticateBtn.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(authenticateUsername)
    console.log(authenticatePassword)
    console.log(document.querySelector('#username'))
  })

})

