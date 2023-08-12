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
  **tailwindcss** (for inline styling),
  **react-icons** (for icons collection),
  **zustand** (for state management with keeping the search images inputs persistant)
- More elaboration is still required to make swapping of photo on home page working well
- The weather page is not made due to the lack of sufficient weather data using the provided API.
- Pages for images of Mars are not provided by the API, so only 10 pages are entered for navigation.

## Vercel deployment

Navigate (https://nasa-ebay.vercel.app/) to see a deployed version.

### The challenge gif-shot:

![Demo](nasa-ebay.gif)
