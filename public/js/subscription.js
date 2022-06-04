async function subscriptionFormHandler(event) {
    event.preventDefault();

        // const candybox_id = parseInt(document.querySelectorAll('input=namecandybox').value)

        const candybox_id = document.querySelector('input[name="candybox"]:checked').value;
        
        const response = await fetch('/api/sub/', {
            method: 'put',
            body: JSON.stringify({
                candybox_id
            }),
            headers: { 'Content-Type': 'application/json' }
        })

        if (response.ok) {
            // document.location.replace('/dashboard');
            console.log(candybox_id);
            console.log(response);
        } else {
            alert('Faliure to subscribe :(');
        }
}
console.log('you made it to the subscriptionFormHandler');


document.querySelector('.subscription-form').addEventListener('submit', subscriptionFormHandler);

