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
  **tailwindcss**, for inline styling,
  **react-icons**, for icons collection,
  **zustand**, for state management (keeping the search images inputs persistant)
- More elaboration is still required to make swapping of photo on home page working well
- The weather page is not made due to the lack of sufficient weather data using the provided API.
- Pages for images of Mars are not provided by the API, so only 10 pages are entered for navigation.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
