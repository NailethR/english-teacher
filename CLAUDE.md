# Inglés B1 — AEF3: método y punteros

Workspace de estudio de American English File 3 (3rd Ed.) que crece examen a examen (Corte → Semestre → Final). Aquí no va bitácora de avance: eso vive en `study-plan.md` y `COVERAGE.md`.

## Leer antes de producir
- `MISSION.md`: los 3 exámenes y qué entra en cada uno.
- `NOTES.md`: preferencias de corrección y **el procedimiento para agregar un módulo** (dónde está cada cosa en los PDF).
- `learning-records/`: debilidades declaradas. Tenerlas en cuenta al armar ejercicios.

## Lenguaje del dominio
- **File**: unidad del libro (1-10), con dos lecciones A y B (ej. 6A, 6B). "Módulo" o "lesson" del usuario = un File A/B.
- **SB / WB**: Student Book / Workbook. **Grammar Bank** (SB pp.132-151), **Vocabulary Bank** (SB pp.152-164), **Review and Check** (cada 2 Files).
- **File Test**: prueba oficial por File; su formato es el de los exámenes reales.
- **Corte / Semestre / Final**: los 3 exámenes.
- **V3**: past participle (3ª columna de irregulares, SB p.165).

## Invariantes
- Todo ejercicio sale del SB/WB o es fiel a su formato. Se cita la página.
- Explicaciones y feedback en español; frases del libro en inglés tal cual.
- Lecciones = HTML estático con `assets/quiz.js` (`checkExercise`, `selectOption`, `shuffleExercise`, `resetSection`). Cada bloque lleva botón de reinicio. Los placeholders nunca revelan la respuesta.
- Los PDF tienen copyright: nunca entran a git.
