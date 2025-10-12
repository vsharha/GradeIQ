"use client"

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/react-query-client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "sonner";

function Providers({children}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      className="min-h-full"
    >
      <QueryClientProvider client={queryClient}>
        {children}
        <Toaster />
        <ReactQueryDevtools initialIsOpen={false}/>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default Providers;