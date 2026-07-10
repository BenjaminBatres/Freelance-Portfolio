import localFont from "next/font/local";
import "./globals.css";
const archetica = localFont({
  src: [
    { path: "../app/fonts/Archetica-Thin.otf", weight: "100" },
    { path: "../app/fonts/Archetica-Light.ttf", weight: "300" },
    { path: "../app/fonts/Archetica-Regular.otf", weight: "400" },
    { path: "../app/fonts/Archetica-Medium.ttf", weight: "500" },
    { path: "../app/fonts/Archetica-Bold.ttf", weight: "700" },
  ],
  variable: "--font-archetica",
});

export const metadata = {
  title: "Benjamin's Portfolio",
  description: "Portfolio website showcasing freelance projects, client collaborations, and professional development work.",
  keywords: [
    "Frontend Developer",
    "Next.js",
    "JavaScript",
    "Portfolio",
    "Web Developer"
  ],
  openGraph: {
    title: "Benjamin's Portfolio",
    description: "Portfolio website showcasing freelance projects, client collaborations, and professional development work.",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={archetica.variable}>
      <body>
        {children}
      </body>
    </html>
  );
}
