
async function signupSubFormHandler(event) {
    event.preventDefault();

        const candybox_id = document.querySelector('input[name="candybox"]:checked').value;

        const response = await fetch('/api/sub/', {
            method: 'post',
            body: JSON.stringify({
                candybox_id,
            }),
            headers: { 'Content-Type': 'application/json' }
        })

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Faliure to subscribe :(');
        }
}

document.querySelector('.sign-sub-form').addEventListener('submit', signupSubFormHandler);

