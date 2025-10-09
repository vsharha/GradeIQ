import Header from "@/components/custom/Header";

function AppLayout({children}) {
  return (
    <>
      <Header/>
      <main className="py-7 px-5">
        {children}
      </main>
    </>
  );
}

export default AppLayout;