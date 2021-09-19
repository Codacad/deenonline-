document.addEventListener('DOMContentLoaded', () => {
  let message = document.getElementById('messages')
  console.log(message)
  message.style.display = "none"
  let authenticate = document.querySelector('div.authenticate');

  let authenticateUsername = document.querySelector('div.authenticate input.username')
  let authenticatePassword = document.querySelector('div.authenticate input.password')


  let authenticateBtn = document.querySelector('div.authenticate button.submit-auth');

  authenticateBtn.addEventListener('click', (e) => {
    e.preventDefault()
    
    if(authenticateUsername.value === "_nomanali" && authenticatePassword.value === "Noman@4064"){
      message.style.display = "block"
      authenticate.style.display = "none"
      authenticateUsername.value = ""
      authenticatePassword.value = ""
    }else{
       
       document.querySelector('span.wrong-credentials').innerHTML = '<span class="text-danger d-block mb-2" style="font-size:14px;">Please enter valid password and username</span>'
       authenticateUsername.value = ""
       authenticatePassword.value = ""
    }

  })
})