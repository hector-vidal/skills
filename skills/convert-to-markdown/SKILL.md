---
name: convert-to-markdown
description: Converts .docx and .pdf documents into Markdown for a knowledge base or for reading by AI, keeping originals in _source/, images in assets/ and converted files apart from hand-written notes, then checks the output for lost text, page furniture and garbled characters. Use when the user asks to convert, import or extract a Word or PDF file (an article, book, case study or report) into Markdown, or to fix or review a converted file.
license: MIT
metadata:
  author: hector-vidal
  version: "0.1.0"
---

# Convert to Markdown

A converted document is a transformation of its original, not a note. It is stored so it can be read, searched and
quoted later; it is not edited for style. Its quality is judged against the original, not by how it looks.

## When to use

- The user wants a `.docx` or `.pdf` turned into Markdown: an article, a book, a case study, a report.
- A folder of originals has to be converted in one batch.
- A converted file looks wrong and needs checking or reconverting.

If the project has its own converter or rules for converted files (names, folders, frontmatter), use those. This skill
covers what they leave unsaid.

## Layout

```text
Project/
├── _source/          # originals, never edited, usually kept out of version control
├── assets/           # images extracted by the conversion
└── <Title>.md        # converted file
```

- **Originals in `_source/`.** They are the source of truth: a bad conversion is redone from them, not patched by
  hand. Check whether `_source/` is ignored by version control before assuming the remote has it.
- **Images in `assets/`**, linked with relative paths from the converted file.
- **Converted files carry no frontmatter** unless the project says otherwise, and are not edited by hand except to
  fix a conversion error. Summaries, ideas and quotes go in the user's own notes, which link the converted file.
- **Name** the file after the document's title, with the year first when the project orders by date
  (`2024 - Title.md`). Do not overwrite an existing converted file without asking: it may hold manual fixes.

## Procedure

1. **Inspect the original.** Page count, whether a PDF has a text layer (select or extract a page of text), language,
   tables, figures, code. A PDF with almost no text is scanned and needs OCR; say so before converting.
2. **Pick the engine.**

   | Source | Engine | Why |
   | --- | --- | --- |
   | `.docx` | Pandoc | Keeps headings, tables, links and Word highlighting (`[text]{.mark}`) |
   | `.pdf` | pymupdf4llm | Extracts images in position, keeps real tables and does not split words at line ends |

   ```sh
   pandoc "_source/Doc.docx" --from=docx \
     --to=markdown-simple_tables-multiline_tables-grid_tables-all_symbols_escapable+pipe_tables \
     --wrap=none --markdown-headings=atx --extract-media=assets -o "Doc.md"
   ```

   Pandoc's `markdown` writer keeps highlighting as `[text]{.mark}` (turn it into code or plain text afterwards if
   the project uses no spans); the extensions force pipe tables and fewer escapes. `-t gfm` is simpler but writes the
   highlighting as an HTML `<span class="mark">`.

   ```python
   import pymupdf4llm
   md = pymupdf4llm.to_markdown("_source/Doc.pdf", write_images=True, image_path="assets")
   ```

   Run Pandoc from the output folder so the media path stays relative. In pymupdf4llm, `write_images` and
   `embed_images` cannot both be true.
3. **Clean the output.** Remove what the engine leaves that the original does not mean: Word's automatic table of
   contents and its anchors, leftover heading attributes (`{#id .class}`), redundant bold in headings, needless
   escapes, stray HTML (`<br>`, `<sup>`, comments), absolute image paths, and hard line breaks inside paragraphs (one
   paragraph per line). Leave headings, tables, lists, images, quotes and code blocks on their own lines.
4. **Check the result** with the list below, against the original. Fix by reconverting with other options when you
   can; edit by hand only what no option fixes, and tell the user what was edited.
5. **Link it.** Add the converted file to the folder's index or README, if there is one. Do not edit the converted
   file to add links.

## Quality checks

| Symptom | Likely cause | What to do |
| --- | --- | --- |
| Markdown has under about 70 % of the characters the PDF text layer has | Layout engine dropped blocks | Reconvert with another engine or mode and compare |
| More than half the text sits in lines over a few thousand characters | Whole page fused into one block | Same as above |
| The same line repeats on most pages (title, author, licence, page number) | Running header or footer | Remove lines that repeat on a large share of pages and sit at the page edge |
| Text written as symbols (`!"#$%&`) or `�` | Font without a usable character map | Repair the map, or report it; never guess the words |
| Broken ligatures (`co!ee`, `certi$cation`) | Ligature glyphs mapped to wrong codes | Same as above |
| Diagonal words inside tables or paragraphs ("Do Not Copy") | Watermark extracted as text | Remove the watermark before or after converting |
| Diagram labels as loose prose or fake tables | Vector figure read as text | Crop the figure to an image in `assets/` instead |
| `[CHART]` or `[DIAGRAM]` in a `.docx` conversion | Pandoc cannot convert charts or SmartArt | Export them as images from the original and link them |
| Multi-column boxes interleaved line by line | Columns merged into one block | Split by column, or flag it |
| Same logo image saved on every page | Decorative running image | Drop images repeated on a large share of pages |
| Merged-cell tables with words cut in half | Pipe tables cannot span cells | Use an HTML table for that one table, if the project allows HTML |

Also compare: number of images, number of tables, and the first and last paragraph of a few pages. Report every
figure you measured (characters, lines, images) with the engine and its version.

## Large results

A converted book or long article is not read in full afterwards. Keep its headings meaningful, so a reader (or an
agent) can list them and open only the section it needs.

## Rules

- Never edit, move or delete the originals in `_source/`.
- Never fill gaps with invented text. Unreadable passages are reported, with page numbers.
- Do not translate, summarise or reword a converted file; it reproduces the original.
- Copyrighted documents stay where the user keeps them; do not publish converted copies elsewhere.
- Do not overwrite an existing converted file without the user's confirmation.
- Do not run git. Leave the files for the user to review.
