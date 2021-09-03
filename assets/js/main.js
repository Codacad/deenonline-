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
})