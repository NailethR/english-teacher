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
