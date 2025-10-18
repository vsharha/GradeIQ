import "@/app/globals.css"
import { Archivo_Black, Ubuntu } from "next/font/google";
import Providers from "@/app/providers";

export const metadata = {
  title: "GradeIQ",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ]
  },
  description: "Your AI tutoring companion",
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
