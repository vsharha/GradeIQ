import Header from "@/components/custom/Header";

function AppLayout({children}) {
  return (
    <>
      <Header/>
      <main>
        {children}
      </main>
    </>
  );
}

export default AppLayout;