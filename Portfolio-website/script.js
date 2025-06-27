function openResume() {
    window.open('sai_shashanth-BMSCE-resume.pdf', '_blank');
  }

function openlumaboard(){
    window.open('https://lumaboard.vercel.app/', '_blank');
}

function opengithub(){
  window.open('https://github.com/Tsaishashanth', '_blank');
}

function openleetcode(){
  window.open('https://leetcode.com/u/shashanthaiml2024/', '_blank');
}
// message sending section

document.getElementById('contact-form').addEventListener('submit', async function (e) {
  e.preventDefault();

  const formData = {
    name: this.name.value,
    email: this.email.value,
    message: this.message.value,
  };

  try {
    const response = await fetch('https://shashanthportfolio.onrender.com/send-email', {
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
