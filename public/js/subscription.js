
const btn70 = document.getElementById('btn-70');
const btn80 = document.getElementById('btn-80');
const btn90 = document.getElementById('btn-90');

const candybox_id = document.getElementById('sub70').value;
const candybox_id2 = document.getElementById('sub80').value;
const candybox_id3 = document.getElementById('sub90').value;

 
async function sub70(){
    const response = await fetch('/api/sub', {
                method: 'POST',
                body: JSON.stringify({
                    candybox_id
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                //  if the response is ok we send the response to the client and we redirect to the dashboard page
                document.location.replace('/dashboard');
            } else {
                alert('Faliure to subscribe to a box :(');
            }
}

async function sub80(){
    const response = await fetch('/api/sub', {
                method: 'POST',
                body: JSON.stringify({
                   candybox_id: candybox_id2
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.ok) {
                //  if the response is ok we send the response to the client and we redirect to the dashboard page
                document.location.replace('/dashboard');
            } else {
                alert('Faliure to subscribe to a box :(');
            }
}

async function sub90(){
    const response = await fetch('/api/sub', {
                method: 'POST',
                body: JSON.stringify({
                    candybox_id: candybox_id3
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.ok) {
                //  if the response is ok we send the response to the client and we redirect to the dashboard page
                document.location.replace('/dashboard');
            } else {
                alert('Faliure to subscribe to a box :(');
            }
}


btn70.addEventListener('click', sub70); 
btn80.addEventListener('click', sub80);
btn90.addEventListener('click', sub90);



    