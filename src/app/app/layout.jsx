import Header from "@/components/custom/Header";

function AppLayout({children}) {
  return (
    <>
      <Header/>
      <main className="py-7 px-5 overscroll-contain">
        {children}
      </main>
    </>
  );
}

export default AppLayout;