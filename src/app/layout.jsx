import { ThemeProvider } from "@/components/ThemeProvider";
import "@/app/globals.css"

export const metadata = {
  title: "GradeIQ",
  description: "Your AI tutoring companionn",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
          <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
          >
              {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
