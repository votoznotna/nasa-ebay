## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## The contstrains

- Due to time limitation reason, the Next.js project is using the following 3-d parth libraries:
  **tailwindcss** (for an accelerated inline style),
  **react-icons** (to use icon collection),
  **react-input-date-mask** (to use date mask in input component),
  **zustand** (for state management with persistance of search images inputs).
- More elaboration is still required to make swapping of photo on home page working flawlessly.
- The total number of pages for images of Mars is not provided by the NASA API, so a hardcoded 10 pages are introduced for navigation.

## Vercel deployment

Navigate (https://nasa-ebay.vercel.app/) to see a deployed version.

### The challenge gif-shot:

![Demo](nasa-ebay.gif)
