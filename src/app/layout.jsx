import { ThemeProvider } from "@/components/ThemeProvider";
import "@/app/globals.css"
import { Archivo_Black, Ubuntu } from "next/font/google";
import Header from "@/components/custom/Header";
import Providers from "@/app/providers";

export const metadata = {
  title: "GradeIQ",
  description: "Your AI tutoring companionn",
};

const ubuntu = Ubuntu({
  weight: ['300','400','500','700'],
  subsets: ['latin'],
  variable: "--font-sans",
  display: "swap",
})

const archivo_black = Archivo_Black({
  weight: "400",
  subsets: ['latin'],
  variable: "--font-heading",
  display: "swap",
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${ubuntu.variable} ${archivo_black.variable}`}>
      <body className="min-h-screen-dynamic flex flex-col">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
