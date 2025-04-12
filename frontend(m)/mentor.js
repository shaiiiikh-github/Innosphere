// File name preview
document.getElementById('degreeCert').addEventListener('change', function () {
    document.getElementById('degreeFileName').textContent = this.files[0]?.name || 'No file chosen';
  });
  
  document.getElementById('idCard').addEventListener('change', function () {
    document.getElementById('idCardFileName').textContent = this.files[0]?.name || 'No file chosen';
  });
  
  // Form submission
  document.getElementById('mentorForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Form submitted successfully! 🚀");
    // You can connect to a backend or handle form data here
  });
  