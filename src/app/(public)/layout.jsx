import Header from "@/components/custom/Header";

function AppLayout({children}) {
  return (
    <>
      <Header/>
      <main className="py-5 overscroll-contain px-4 sm:px-6 sm:py-7 flex-1 w-full flex flex-col items-center">
        {children}
      </main>
    </>
  );
}

export default AppLayout;