const form = document.getElementById('form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  // Validasi input sebelum menambahkan ke dalam array
  if (name && email && subject && message) {
    const formData = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };

    let formDataArray = JSON.parse(localStorage.getItem('formDataArray')) || [];

    // Menambahkan data baru ke dalam array
    formDataArray.push(formData);

    alert('Form data has been submitted successfully!');

    localStorage.setItem('formDataArray', JSON.stringify(formDataArray));

    // Menampilkan pesan konfirmasi
    form.reset();
  } else {
    alert('Please fill in all fields before submitting the form.');
  }
});

