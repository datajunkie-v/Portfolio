# Vishal Panuganti Portfolio

A responsive, Vercel-ready portfolio built with Next.js App Router, React, TypeScript, and Tailwind CSS. Content is maintained in `src/data/portfolio.ts`; the project case studies are generated from the same structured records.

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000. Before deploying, run `npm run lint` and `npm run build`.

## Resume asset

The resume PDF was not present in the supplied workspace. Add the real PDF at:

`public/resume/vishal-panuganti-resume.pdf`

The resume links already point to that file. No PDF has been fabricated.

## Deployment

Import the repository into Vercel and use the detected Next.js defaults. The project uses static rendering for the home page and both project case studies.
