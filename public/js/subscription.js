

async function subscriptionFormHandler(event) {
    event.preventDefault();


    const candybox_id = document.querySelector('#candybox-input-subscription').value.trim();

    if (candybox_id) {
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
    }
}

document.querySelector('.subscription-form').addEventListener('submit', subscriptionFormHandler);

