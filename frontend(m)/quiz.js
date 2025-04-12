const questions = [
  {
    question: "What is the best way to introduce yourself in a GD?",
    options: ["Start immediately", "Wait and greet formally", "Interrupt others", "Stay silent"],
    answer: 1
  },
  {
    question: "What is the full form of HR?",
    options: ["Human Rank", "Human Resource", "Head Recruiter", "Hiring Resource"],
    answer: 1
  },
  {
    question: "In interviews, it's important to...",
    options: ["Avoid eye contact", "Speak very casually", "Be confident and polite", "Ignore questions"],
    answer: 2
  },
  {
    question: "Group discussions help test...",
    options: ["Sports skills", "Coding only", "Communication and teamwork", "Drawing ability"],
    answer: 2
  }
];

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
  const quizBox = document.getElementById("quizBox");
  const q = questions[currentQuestion];

  let html = `<h3>${q.question}</h3>`;
  q.options.forEach((opt, i) => {
    html += `
      <div>
        <input type="radio" name="option" value="${i}" id="opt${i}">
        <label for="opt${i}">${opt}</label>
      </div>
    `;
  });

  quizBox.innerHTML = html;

  // Toggle buttons
  document.getElementById("submitBtn").style.display = "none";
  document.getElementById("nextBtn").style.display = "inline-block";
}

function nextQuestion() {
  const selected = document.querySelector('input[name="option"]:checked');
  if (!selected) return alert("Please select an option!");

  if (parseInt(selected.value) === questions[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    displayQuestion();
  } else {
    // ✅ Redirect to session page
    window.location.href = "session.html";
  }
}

window.onload = displayQuestion;
