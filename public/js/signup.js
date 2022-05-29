async function signupFormHandles (event){
    event.preventDefault();

    const first_name = document.querySelector('#first-input-signup');
    const last_name = document.querySelector('#last-input-signup');
    const email = document.querySelector('#email-input-signup');
    const password = document.querySelector('#password-input-signup');
    const address = document.querySelector('#address-input-signup');
    const city = document.querySelector('#city-input-signup');
    const state = document.querySelector('#state-input-signup');
    const zipCode = document.querySelector('#zip-input-signup');


    if(first_name && last_name && email && password && address && city && state && zipCode){
        const response = await fetch('/api/users',{
            method:'POST',
            body:JSON.stringify({
                first_name,
                last_name,
                email,
                password,
                address,
                city,
                state,
                zipCode
            }),
            headers:{'Content-Type':'application/json'},
        });
        if(response.ok){
            document.location.replace('/dashboard');
        }else{
            alert('Faliure to sign up :(');
        }
    };
};

document.querySelector('.signup-form').addEventListener('submit',signupFormHandles);
