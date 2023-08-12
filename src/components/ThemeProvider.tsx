"use client";

export const dynamic = "force-dynamic"; // this is the fix
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { useEffect, useState } from "react";

export default function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient ? (
        <NextThemesProvider enableSystem={true} attribute="class" {...props}>
          <div className="dark:bg-gray-700 dark:text-gray-200 text-gray-700 transition-colors duration-300 min-h-screen select-none">
            {children}
          </div>
        </NextThemesProvider>
      ) : (
        <></>
      )}
    </>
  );
}
