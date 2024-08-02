document.addEventListener('DOMContentLoaded', function () {
  const formTitle = document.getElementById('form-title')
  const userForm = document.getElementById('user-form')
  const nameInput = document.getElementById('name')
  const emailInput = document.getElementById('email')
  const ageInput = document.getElementById('age')
  const submitBtn = document.getElementById('submit-btn')
  const outputDiv = document.getElementById('output')
  formTitle.textContent = 'Please Fill Out the Form'

  submitBtn.addEventListener('click', function () {
    document.querySelectorAll('.error').forEach(function (errorSpan) {
      errorSpan.textContent = ''
    })
    const nameValue = nameInput.value.trim()
    const emailValue = emailInput.value.trim()
    const ageValue = ageInput.value.trim()

    let valid = true

    if (nameValue === '') {
      document.getElementById('name-error').textContent = 'Name is required'
      valid = false
    }
    if (emailValue === '') {
      document.getElementById('email-error').textContent = 'Email is required'
      valid = false
    }
    if (ageValue === '' || ageValue <= 0) {
      document.getElementById('age-error').textContent = 'Valid age is required'
      valid = false
    }

    if (valid) {
      outputDiv.innerHTML = `
        <h2>User Information</h2>
        <p><strong>Name:</strong> ${nameValue}</p>
        <p><strong>Email:</strong> ${emailValue}</p>
        <p><strong>Age:</strong> ${ageValue}</p>
        
        `
    }
  })

  outputDiv.style.border = '1px solid #333'
    outputDiv.style.padding = '10px'
    outputDiv.style.marginTop = '10px'
})

document.querySelector('#output').style.border = '1px solid red'
// output