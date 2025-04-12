function sendFeedback() {
    const feedbackText = document.getElementById("feedback-input").value;
    if (!feedbackText.trim()) return;
  
    const feedbackElements = document.querySelectorAll('.feedback');
    feedbackElements.forEach(el => {
      el.textContent = feedbackText;
      el.style.color = "#00ffcc";
      el.style.textShadow = "0 0 10px #00ffcc";
    });
  
    document.getElementById("feedback-input").value = "";
  }
  