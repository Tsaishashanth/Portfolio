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
  window.open('https://leetcode.com/u/TarigopulaSaiShashanth/', '_blank');
}
function opendevseekr() {
  window.open('https://devseekr.vercel.app/', '_blank');
}

// this is for changing roles for every2seconds
  const roles = [
    "Frontend Developer",
    "Backend Developer",
    "Fullstack Developer"
  ];

  let roleIndex = 0;
  let charIndex = 0;
  const roleElement = document.getElementById("role");

  function typeRole() {
    const currentRole = roles[roleIndex];
    if (charIndex < currentRole.length) {
      roleElement.textContent += currentRole.charAt(charIndex);
      charIndex++;
      setTimeout(typeRole, 100); // Typing speed
    } else {
      setTimeout(() => {
        eraseRole();
      }, 1500); // Pause before erasing
    }
  }

  function eraseRole() {
    const currentText = roleElement.textContent;
    if (currentText.length > 0) {
      roleElement.textContent = currentText.slice(0, -1);
      setTimeout(eraseRole, 50); // Deleting speed
    } else {
      roleIndex = (roleIndex + 1) % roles.length;
      charIndex = 0;
      setTimeout(typeRole, 300);
    }
  }

  // Start typing
  typeRole();

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
