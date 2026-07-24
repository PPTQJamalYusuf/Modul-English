/**
 * Modul Pembelajaran Bahasa Inggris - PPTQ Jamal Yusuf Al-Haddad
 * Generic Interactive Quiz Logic (Client-Side)
 */

document.addEventListener("DOMContentLoaded", function () {
  if (typeof quizData !== "undefined" && Array.isArray(quizData)) {
    renderQuiz();
  } else {
    console.error("quizData is not defined or valid.");
  }
});

function renderQuiz() {
  const container = document.getElementById("quiz-container");
  if (!container) return;

  let html = "";
  quizData.forEach((q, index) => {
    html += `
      <div class="quiz-question-card" id="q-card-${index}">
        <div class="question-number">Soal ${index + 1} dari ${quizData.length}</div>
        <div class="question-text">${q.question}</div>
        <div class="options-group">
    `;

    q.options.forEach((optionText, optIndex) => {
      html += `
        <label class="option-label" id="label-${index}-${optIndex}">
          <input type="radio" name="question_${index}" value="${optIndex}">
          <span>${String.fromCharCode(65 + optIndex)}. ${optionText}</span>
        </label>
      `;
    });

    html += `
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

function submitQuiz() {
  if (typeof quizData === "undefined") return;

  let score = 0;
  let answeredCount = 0;

  // Clear previous states
  document.querySelectorAll(".option-label").forEach((el) => {
    el.classList.remove("correct", "incorrect");
  });

  quizData.forEach((q, index) => {
    const selected = document.querySelector(`input[name="question_${index}"]:checked`);
    
    if (selected) {
      answeredCount++;
      const userAns = parseInt(selected.value, 10);
      const userLabel = document.getElementById(`label-${index}-${userAns}`);
      
      if (userAns === q.answer) {
        score++;
        if (userLabel) userLabel.classList.add("correct");
      } else {
        if (userLabel) userLabel.classList.add("incorrect");
        // Also highlight correct answer for learning feedback
        const correctLabel = document.getElementById(`label-${index}-${q.answer}`);
        if (correctLabel) correctLabel.classList.add("correct");
      }
    } else {
      // Highlight correct answer if left un-answered
      const correctLabel = document.getElementById(`label-${index}-${q.answer}`);
      if (correctLabel) correctLabel.classList.add("correct");
    }
  });

  if (answeredCount < quizData.length) {
    const confirmSubmit = confirm(`Anda baru menjawab ${answeredCount} dari ${quizData.length} soal. Yakin ingin mengumpulkan?`);
    if (!confirmSubmit) return;
  }

  // Calculate percentage
  const percentage = Math.round((score / quizData.length) * 100);
  
  // Show score banner
  const scoreBanner = document.getElementById("score-banner");
  const scoreText = document.getElementById("score-text");
  
  if (scoreBanner && scoreText) {
    scoreText.innerHTML = `
      Skor Anda: <strong>${score} / ${quizData.length}</strong> (${percentage}%)<br>
      <small>${percentage >= 70 ? '🎉 Selamat! Hasil yang sangat baik.' : '💪 Tetap semangat! Pelajari kembali materi dan coba lagi.'}</small>
    `;
    scoreBanner.style.display = "block";
    scoreBanner.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

function resetQuiz() {
  renderQuiz();
  const scoreBanner = document.getElementById("score-banner");
  if (scoreBanner) {
    scoreBanner.style.display = "none";
  }
  const quizSection = document.getElementById("quiz-section");
  if (quizSection) {
    quizSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
