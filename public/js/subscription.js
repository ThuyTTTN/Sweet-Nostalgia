

async function subscriptionFormHandler(event) {
    event.preventDefault();


    const candybox_id_1 = document.querySelector('#candybox_id_1').value.trim();
    const candybox_id_2 = document.querySelector('#candybox_id_2').value.trim();
    const candybox_id_3 = document.querySelector('#candybox_id_3').value.trim();
    
        const response = await fetch('/api/users/', {
            method: 'put',
            body: JSON.stringify({
                candybox_id_1,
                candybox_id_2,
                candybox_id_3
            }),
            headers: { 'Content-Type': 'application/json' }
        })

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Faliure to subscribe :(');
        }
}


document.querySelector('.subscription-form').addEventListener('submit', subscriptionFormHandler);

