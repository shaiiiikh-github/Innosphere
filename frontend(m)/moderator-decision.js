// Optional: Load moderator name if stored earlier
window.onload = function () {
    const name = localStorage.getItem("moderatorName");
    if (name) {
      document.getElementById("moderatorName").value = name;
    }
  };
  
  document.getElementById("decisionForm").addEventListener("submit", function (e) {
    const selectedStudents = document.querySelectorAll(".student-checkbox:checked");
  
    if (selectedStudents.length === 0 || selectedStudents.length > 5) {
      e.preventDefault(); // Prevent form submission if validation fails
      alert("Please select between 1 to 5 participants.");
    }
  });
  
    const selectedStudents = document.querySelectorAll(".student-checkbox:checked");
  
    if (selectedStudents.length === 0 || selectedStudents.length > 5) {
      alert("Please select between 1 to 5 participants.");
      return;
    }
  
    alert("Group Discussion Session Created!");
    // You can redirect or store data if needed
  
  