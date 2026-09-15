// Componente reutilizable de ejercicio corregible.
// Cada <input type="text" data-answer="respuesta|alternativa2"> se compara al pulsar
// el botón .check-btn del mismo .exercise. Se marca correct/incorrect y se muestra
// el <div class="explain" data-for="idInput"> asociado (mismo índice) si existe.
// Normaliza espacios y mayúsculas; permite varias respuestas válidas separadas por "|".

function checkExercise(exerciseId) {
  const box = document.getElementById(exerciseId);
  if (!box) return;
  const inputs = box.querySelectorAll("input[type='text'][data-answer]");
  let correct = 0;

  inputs.forEach((input, i) => {
    const raw = input.value.trim().toLowerCase().replace(/\s+/g, " ");
    const answers = input.dataset.answer
      .split("|")
      .map((a) => a.trim().toLowerCase().replace(/\s+/g, " "));
    const isCorrect = answers.includes(raw) && raw.length > 0;

    input.classList.remove("correct", "incorrect");
    input.classList.add(isCorrect ? "correct" : "incorrect");
    if (isCorrect) correct++;

    const explain = box.querySelector(`.explain[data-for="${input.id}"]`);
    if (explain) {
      explain.classList.add("show");
      explain.classList.toggle("right", isCorrect);
      explain.classList.toggle("wrong", !isCorrect);
      if (!isCorrect) {
        explain.innerHTML =
          `<strong>Correcto:</strong> <span class="en">${input.dataset.answer.split("|")[0]}</span> — ` +
          (explain.dataset.rule || "");
      } else {
        explain.innerHTML = `<strong>✓ Bien.</strong> ${explain.dataset.rule || ""}`;
      }
    }
  });

  const scoreEl = box.querySelector(".score");
  if (scoreEl) {
    scoreEl.textContent = `${correct} / ${inputs.length} correctas`;
  }
}

// Flashcards: click para voltear y revelar el significado/ejemplo.
function toggleFlashcard(card) {
  card.classList.toggle("flipped");
}

// Quiz de opción múltiple. Cada .mc-question tiene data-correct="texto exacto
// del botón correcto". Al elegir, se marca correct/incorrect en todos los
// botones de esa pregunta y se deshabilitan.
function selectOption(button, question) {
  const correctText = question.dataset.correct.trim().toLowerCase();
  const buttons = question.querySelectorAll(".mc-options button");
  const feedback = question.querySelector(".mc-feedback");
  const chosenCorrect = button.textContent.trim().toLowerCase() === correctText;

  buttons.forEach((b) => {
    b.disabled = true;
    if (b.textContent.trim().toLowerCase() === correctText) {
      b.classList.add("correct");
    } else if (b === button) {
      b.classList.add("incorrect");
    }
  });

  if (feedback) {
    feedback.textContent = chosenCorrect
      ? "✓ Correcto."
      : `✗ La respuesta correcta era: ${question.dataset.correct}.`;
    if (feedback.dataset.rule) {
      feedback.textContent += " " + feedback.dataset.rule;
    }
  }
}

// Reinicia todas las flashcards y multiple-choice de un contenedor (útil
// para "repetir esta sección" sin recargar la página).
function resetSection(sectionId) {
  const box = document.getElementById(sectionId);
  if (!box) return;
  box.querySelectorAll(".flashcard.flipped").forEach((c) => c.classList.remove("flipped"));
  box.querySelectorAll(".mc-options button").forEach((b) => {
    b.disabled = false;
    b.classList.remove("correct", "incorrect");
  });
  box.querySelectorAll(".mc-feedback").forEach((f) => (f.textContent = ""));
  box.querySelectorAll("input[type='text']").forEach((i) => {
    i.value = "";
    i.classList.remove("correct", "incorrect");
  });
  box.querySelectorAll(".explain").forEach((e) => e.classList.remove("show", "right", "wrong"));
  const scoreEl = box.querySelector(".score");
  if (scoreEl) scoreEl.textContent = "";
}
