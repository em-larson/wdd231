//Code for the thank you page//


const results = new URLSearchParams(window.location.search);
timestamp = localStorage.getItem('timestamp');

document.querySelector('#results').innerHTML = `
<p>Thank you ${results.get('fname')} ${results.get('lname')} for applying to the Ogden Weber Chamber of Commerce.</p>
<p>Email: ${results.get('email')}</p>
<p>Phone Number: ${results.get('phone')}</p>
<div>
<p>${results.get('organization')}</p>
<p>${results.get('level')} Member</p>
<p>${results.get('business-description')}</p>
</div>
<p>${timestamp}</p>
`

