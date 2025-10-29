// Smooth scroll to contact from home
function scrollToContact() {
  window.location.href = 'contact.html';
}

// Toggle card expansion
function toggleCard(card) {
  card.classList.toggle('expanded');
}

// Form validation + modal popup
function handleSubmit(event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert('Please enter a valid email.');
    return;
  }

  // Show success modal
  document.getElementById('modal').style.display = 'block';
  document.getElementById('contactForm').reset();
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

// Close modal if clicked outside content
window.onclick = function(event) {
  const modal = document.getElementById('modal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
}