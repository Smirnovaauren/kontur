export function validateForm(formElement) {
  if (!formElement) return false
  return formElement.checkValidity()
}
