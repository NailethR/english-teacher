# Notes — preferencias y contexto de trabajo

- **Usar `/mattpocock-skills:teach`** al retomar este workspace si está disponible. Instrucción del usuario (2026-09-14): esta skill gobierna cómo se estructura el proyecto de estudio.
- **El repo crece por examen (2026-10-26):** Corte (Files 1-5, ya preparado), Semestre (desde File 6), Final. El usuario pide los módulos nuevos a medida que llega cada examen.
- **Estilo de corrección fijo:** siempre marcar el error, explicar la regla en español, dar el ejemplo correcto.
- **Volumen:** muchos ejercicios, pero del libro (Workbook primero) y en sesiones que se terminan en una sentada. Lo extra va a páginas opcionales, no dentro del Día (corrección del usuario 2026-11-02).
- **Saltó A1:** cuando un error B1 delata un hueco más básico (tercera persona -s, verbo be, etc.), tapar ese hueco antes de seguir.
- **Claves deducidas:** el libro no trae respuestas. El usuario aceptó (2026-10-26) que las respuestas se deduzcan si cumplen la gramática y la lógica del idioma.
- **Debilidad declarada:** reconocer la voz pasiva (ver `learning-records/0002`).

## Cómo se agrega un módulo (File xA/xB)
Confirmado por el usuario (2026-10-26): Claude saca el tema de cada lección del propio libro, sin que se lo dicten.
1. Tema y gramática: índice del Student Book (PDF p.4 = impresa p.3).
2. Grammar Bank: SB pp.132-151, una página por lección (6A = p.142, 6B = p.143).
3. Vocabulary Bank: SB pp.152-164 (Movies p.159, The body p.160).
4. Workbook: páginas del File (6A = pp.40-42, 6B = pp.43-45). El texto extraído sale corrupto: leer las páginas renderizadas como imagen.
5. Review and Check del par de Files (5&6 = SB p.64).
6. Armar **un Día por File** (formato del reto del Corte, corregido por el usuario 2026-11-02 porque 6A/6B salieron densos y repetidos):
   - Lección `DÍA N · xA`: explicación de 1 minuto (3-4 bullets + 1 tabla corta, enlace a `reference/`) → **solo ejercicios del Workbook, en el orden del libro**. Sin ejercicios de pronunciación (pedido del usuario 2026-11-02).
   - Vocabulary Bank → sección nueva en `lessons/0014-vocabulario-flashcards-semestre.html` (Paso 1 flashcards, Paso 2 escribir). La lección enlaza ahí antes de su bloque de vocabulario.
   - Grammar Bank → bloque opcional `<details>` al final, o página de refuerzo si es debilidad declarada.
   - Sin práctica extra propia en la lección. Review and Check → simulacro del examen.
   - La explicación larga vive en un solo lugar (`reference/`); no repetirla en la lección.
7. Verificar en el navegador que cada ejercicio marque 100% con la clave y que no haya IDs duplicados; actualizar `index.html`, `COVERAGE.md` y `study-plan.md`.

## Offsets de página
- Workbook: página impresa = página del PDF (offset 0).
- Student Book: página impresa = página del PDF − 1. El PDF es solo imagen (sin capa de texto).
