function openResume() {
    window.open('sai_shashanth-BMSCE-resume.pdf', '_blank');
  }

function openlumaboard(){
    window.open('https://lumaboard.vercel.app/', '_blank');
}

// message sending section

document.getElementById('contact-form').addEventListener('submit', async function (e) {
  e.preventDefault();

  // Manually get values using querySelector
  const name = document.querySelector('input[name="name"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const message = document.querySelector('textarea[name="message"]').value;

  try {
    const response = await fetch('/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (result.success) {
      alert('Message sent successfully!');
      this.reset();
    } else {
      alert('Failed to send message.');
    }
  } catch (error) {
    console.error('JS error:', error); 
    alert('Error sending message.');
  }
});
