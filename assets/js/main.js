const APPS_SCRIPT_URL = 'YOUR_APPS_SCRIPT_URL_HERE';

const form = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const formMessage = document.getElementById('form-message');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      showMessage('Please fill in all fields.', 'error');
      return;
    }

    if (!isValidEmail(email)) {
      showMessage('Please enter a valid email address.', 'error');
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    hideMessage();

    try {
      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      showMessage('Thank you! We will be in touch shortly.', 'success');
      form.reset();
    } catch (error) {
      console.error('Form submission failed:', error);
      showMessage('Something went wrong. Please try again.', 'error');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Message';
    }
  });
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showMessage(text, type) {
  formMessage.textContent = text;
  formMessage.className = `form-message ${type}`;
}

function hideMessage() {
  formMessage.className = 'form-message';
}

// Copy to clipboard functionality
const copyButtons = document.querySelectorAll('.copy-button');

copyButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const textToCopy = button.dataset.copy;
    const tooltip = button.querySelector('.copy-tooltip');

    navigator.clipboard.writeText(textToCopy).then(() => {
      tooltip.classList.add('show');
      setTimeout(() => {
        tooltip.classList.remove('show');
      }, 2000);
    }).catch(() => {
      console.error('Failed to copy text');
    });
  });
});

// Accordion functionality
const accordionHeaders = document.querySelectorAll('.accordion__header');
let activeAccordion = 'uk'; // Set UK as open by default

accordionHeaders.forEach((header) => {
  const region = header.dataset.region;
  const body = document.getElementById(`${region}-content`);
  const toggle = header.querySelector('.accordion__toggle');

  if (!body || !toggle) return;

  // Open UK accordion by default
  if (region === 'uk') {
    body.classList.add('is-open');
    toggle.textContent = '−';
  }

  header.addEventListener('click', () => {
    // Close other accordion if open
    if (activeAccordion && activeAccordion !== region) {
      const otherBody = document.getElementById(`${activeAccordion}-content`);
      const otherToggle = document.querySelector(
        `.accordion__header[data-region="${activeAccordion}"] .accordion__toggle`
      );
      if (otherBody && otherToggle) {
        otherBody.classList.remove('is-open');
        otherToggle.textContent = '+';
      }
    }

    // Toggle current accordion
    body.classList.toggle('is-open');
    toggle.textContent = body.classList.contains('is-open') ? '−' : '+';
    activeAccordion = body.classList.contains('is-open') ? region : null;
  });
});
