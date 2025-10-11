//Code for the thank you page//


const results = new URLSearchParams(window.location.search);
timestamp = localStorage.getItem('timestamp');

document.querySelector('#results').innerHTML = `
<p>Thank you ${results.get('fname')} ${results.get('lname')} for submitting your post.</p>
<p>Email: ${results.get('email')}</p>
<p>Phone Number: ${results.get('phone')}</p>
<div>
<p>${results.get('groupName')}</p>
<p>${results.get('lookingFor')} Member</p>
<p>${results.get('schedule')}</p>
<p>${results.get('description')}</p>
<p>${results.get('contact')}</p>
</div>
<p>${timestamp}</p>
`
