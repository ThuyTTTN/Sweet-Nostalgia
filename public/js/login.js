const loginFormHandles = async function(event){
    event.preventDefault();

    const email = document.querySelector('#email-input-login').value.trim();
    const password = document.querySelector('#password-input-login').value.trim();

   if(email && password){
       const loginData = await fetch('api/user/login',{
           method:'POST',
           body: JSON.stringify({
               email,
               password
           }),
           headers: {'Content-Type': 'application/json'},
       });
    
       if(loginData.ok){
           document.location.replace('/dashboard')
       }else{
           alert('Please try again, login failed')
       }
   } 

};


document.querySelector('.login-form').addEventListener('submit',loginFormHandles);