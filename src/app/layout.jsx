import "@/app/globals.css"
import { Archivo_Black, Ubuntu } from "next/font/google";
import Providers from "@/app/providers";
import { QueryClient } from "@tanstack/react-query";
import getServerAuthHeaders from "@/services/getServerAuthHeaders";
import { fetchAssignments, fetchUser } from "@/services/fetchApi";

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

export default async function RootLayout({ children }) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['user'],
    queryFn: async ()=>{
      const headers = await getServerAuthHeaders();
      return await fetchUser(headers)
    },
  });

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
