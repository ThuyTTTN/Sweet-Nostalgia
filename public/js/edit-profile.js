// a syncrhonous function to get the user's profile
async function editFormHandler(event) {
    //  preventDefault method prevents the form from submitting
    event.preventDefualt();

    const  first_name = document.querySelector('#firstName').value;
    const  last_name = document.querySelector('#lastName').value;
    const  email = document.querySelector('#email').value;
    const address = document.querySelector('#address').value;
    const city = document.querySelector('#city').value;
    const state = document.querySelector('#state').value;
    const zipCode = document.querySelector('#zipCode').value;

    // variable for teh id of the user using the url
    const id = window.location.toString().split('/')
    [window.location.toString().split('/').length - 1];

    const response = await fetch(`/api/users/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            first_name,
            last_name,
            email,
            password,
            address,
            city,
            state,
            zipCode,
        }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('#edit-profile-form').addEventListener('submit', editFormHandler);
