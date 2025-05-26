document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const successMessage = document.getElementById("successMessage");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Reset validation styles
    nameInput.classList.remove("is-invalid");
    emailInput.classList.remove("is-invalid");
    successMessage.classList.add("d-none");

    let valid = true;

    // Validate Name
    if (!nameInput.value.trim()) {
      nameInput.classList.add("is-invalid");
      valid = false;
    }

    // Validate Email
    if (!emailInput.value.trim() || !validateEmail(emailInput.value)) {
      emailInput.classList.add("is-invalid");
      valid = false;
    }

    if (valid) {
      // Simulate form submission success
      successMessage.classList.remove("d-none");
      form.reset();
    }
  });

  function validateEmail(email) {
    // Simple email regex validation
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  }
});
