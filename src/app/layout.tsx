import Header from "@/components/Header";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata = {
  title: "NASA Mars",
  description: "NASA Science MARS Exploration website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
