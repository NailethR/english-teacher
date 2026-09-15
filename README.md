# Inglés B1 — Prep intensiva examen final (Units 1-5)

Workspace de estudio construido con la skill `/mattpocock-skills:teach`. Ver [MISSION.md](./MISSION.md) para el objetivo real: aprobar el examen final escrito en 1 semana.

## Estructura
- `MISSION.md` — por qué se estudia esto y qué significa "éxito".
- `RESOURCES.md` — fuentes de verdad (Student Book, Workbook, File Tests ya rendidos).
- `NOTES.md` — preferencias de trabajo (estilo de corrección, ritmo, etc.).
- `study-plan.md` — reparto día a día hasta el examen.
- `lessons/000N-*.html` — una lección por sesión, abrir en el navegador. Ejercicios interactivos con corrección automática.
- `reference/000N-*.html` — hojas de referencia rápida (cheat sheets) por tema, para consultar durante el examen.
- `learning-records/000N-*.md` — qué ya se domina y qué huecos de base se detectaron.
- `assets/` — CSS y JS compartidos por todas las lecciones.

## Cómo estudiar cada día
1. Abre la lección del día en el navegador (doble clic al `.html`, o `open lessons/000N-*.html` en terminal).
2. Lee la explicación corta, resuelve los ejercicios, pulsa "Revisar".
3. Cuando algo no calce, pregúntale a Claude Code en esta misma carpeta — es tu profesor y corrige explicando siempre en español.
4. Al terminar, dile a Claude que generalmente cierre el día — así se actualiza `study-plan.md` y se registra qué quedó débil para el repaso final.

## Material fuente (no versionado en git)
Los PDF del Student Book, Workbook y los File Tests son material con copyright de Oxford University Press — quedan en esta carpeta pero excluidos de git vía `.gitignore`.
