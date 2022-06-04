async function subscriptionFormHandler(event) {
    event.preventDefault();

        const candybox_id_1 = parseInt(document.querySelector('#candybox_id_1').value)
        const candybox_id_2 = parseInt(document.querySelector('#candybox_id_2').value)
        const candybox_id_3 = parseInt(document.querySelector('#candybox_id_3').value)

        const response = await fetch('/api/sub/', {
            method: 'put',
            body: JSON.stringify({
                candybox_id: candybox_id_1,
                candybox_id: candybox_id_2,
                candybox_id: candybox_id_3
            }),
            headers: { 'Content-Type': 'application/json' }
        })

        if (response.ok) {
            // document.location.replace('/dashboard');
            console.log(candybox_id_1);
            console.log(candybox_id_2);
            console.log(candybox_id_3);
            console.log(response);
        } else {
            alert('Faliure to subscribe :(');
        }
}
console.log('you made it to the subscriptionFormHandler');


document.querySelector('.subscription-form').addEventListener('submit', subscriptionFormHandler);

