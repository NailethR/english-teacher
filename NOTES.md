# Notes — preferencias y contexto de trabajo

- **Usar `/mattpocock-skills:teach`** al retomar este workspace si está disponible. Instrucción del usuario (2026-09-14): esta skill gobierna cómo se estructura el proyecto de estudio.
- **El repo crece por examen (2026-10-26):** Corte (Files 1-5, ya preparado), Semestre (desde File 6), Final. El usuario pide los módulos nuevos a medida que llega cada examen.
- **Estilo de corrección fijo:** siempre marcar el error, explicar la regla en español, dar el ejemplo correcto.
- **Volumen:** priorizar cantidad de ejercicios por sesión por sobre lecciones cortas de una sola victoria.
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
6. Armar una lección con: explicación del Grammar Bank en español + tabla de estructura, todos los ejercicios del Grammar Bank, del Workbook y de la Vocabulary Bank, más práctica extra propia del mismo formato.
7. Verificar en el navegador que cada ejercicio marque 100% con la clave y que no haya IDs duplicados; actualizar `index.html`, `COVERAGE.md` y `study-plan.md`.

## Offsets de página
- Workbook: página impresa = página del PDF (offset 0).
- Student Book: página impresa = página del PDF − 1. El PDF es solo imagen (sin capa de texto).
