import Header from "@/components/custom/Header";

function AppLayout({children}) {
  return (
    <>
      <Header/>
      <main className="py-5 px-1 overscroll-contain sm:px-3 sm:py-7 flex-1 flex flex-col items-center">
        {children}
      </main>
    </>
  );
}

export default AppLayout;