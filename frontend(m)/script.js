const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");

let balls = [];
let glowingCircles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

function createBallsAndCircles() {
  balls = [];
  glowingCircles = [];

  // Dancing Mini Balls (Jugnu)
  for (let i = 0; i < 100; i++) {
    balls.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5,
      glow: `rgba(0,255,255,${Math.random()})`
    });
  }
  function submitQuiz() {
    const selected = document.querySelector('input[name="option"]:checked');
    if (!selected) return alert("Please select an option!");
  
    if (parseInt(selected.value) === questions[currentQuestion].answer) {
      score++;
    }
  
    let percentage = (score / questions.length) * 100;
    let level = "";
  
    if (percentage <= 40) level = "Beginner";
    else if (percentage <= 60) level = "Moderate";
    else level = "Advanced";
  
    document.getElementById("quizBox").innerHTML = "";
    document.getElementById("button-container").style.display = "none";
    document.getElementById("result").innerHTML = `
      <h2>Your Score: ${score}/${questions.length} (${percentage.toFixed(0)}%)</h2>
      <p>You are categorized as: <strong>${level}</strong></p>
    `;
  
    // ✅ Show the next button after result
    document.getElementById("afterResultBtn").style.display = "block";
  }
  
  function goToSession() {
    window.location.href = "session.html";
  }
  

  // Glowing Shining Circles
  for (let i = 0; i < 15; i++) {
    glowingCircles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      baseRadius: Math.random() * 40 + 30,
      r: 0,
      pulse: Math.random() * 2,
      alpha: Math.random() * 0.3 + 0.1,
    });
  }
}
createBallsAndCircles();

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawGlowingCircles();
  drawBalls();
  drawLaserLines();

  requestAnimationFrame(draw);
}

function drawBalls() {
  for (let b of balls) {
    ctx.beginPath();
    ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
    ctx.fillStyle = b.glow;
    ctx.shadowBlur = 8;
    ctx.shadowColor = "#00ffff";
    ctx.fill();

    b.x += b.dx;
    b.y += b.dy;

    if (b.x < 0 || b.x > canvas.width) b.dx *= -1;
    if (b.y < 0 || b.y > canvas.height) b.dy *= -1;
  }
}

function drawGlowingCircles() {
  for (let c of glowingCircles) {
    c.r = c.baseRadius + Math.sin(Date.now() / 1000 + c.pulse) * 10;

    ctx.beginPath();
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(0, 255, 255, ${c.alpha})`;
    ctx.shadowBlur = 50;
    ctx.shadowColor = "#00ffff";
    ctx.fill();
  }
}

function drawLaserLines() {
  ctx.strokeStyle = "rgba(255,255,255,0.04)";
  ctx.lineWidth = 0.5;
  for (let i = 0; i < 10; i++) {
    ctx.beginPath();
    ctx.moveTo(Math.random() * canvas.width, 0);
    ctx.lineTo(Math.random() * canvas.width, canvas.height);
    ctx.stroke();
  }
}

draw();
