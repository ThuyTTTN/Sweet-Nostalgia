async function subscriptionFormHandler(event) {
    event.preventDefault();

        const btn70s = document.getElementById('btn70s').value
        const btn80s = document.getElementById('btn80s').value
        const btn90s = document.getElementById('btn90s').value
    
    
        const response = await fetch('/api/users/', {
            method: 'put',
            body: JSON.stringify({
                candybox_id
            }),
            headers: { 'Content-Type': 'application/json' }
        })

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Faliure to subscribe :(');
        }

        btn70s.addEventListener('click', subscriptionFormHandler);
        btn80s.addEventListener('click', subscriptionFormHandler);
        btn90s.addEventListener('click', subscriptionFormHandler);
}



// document.querySelector('.subscription-form').addEventListener('submit', subscriptionFormHandler);

