const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Validate contact form fields. Returns an errors object (empty = valid). */
export function validateContact({ name, email, message }) {
  const errors = {};
  if (!name.trim()) errors.name = 'Please add your name.';
  if (!emailRe.test(email.trim())) errors.email = 'Enter a valid email address.';
  if (message.trim().length < 10) errors.message = 'Tell me a little more (10+ characters).';
  return errors;
}
