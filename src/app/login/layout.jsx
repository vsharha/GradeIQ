import Header from "@/components/custom/Header";
import { Button } from "@/components/ui/button";
import BlockLoader from "@/components/loader/BlockLoader";

function Layout({children}) {
  return (
    <>
      <Header />
      <main className="py-5 overscroll-contain px-4 sm:px-6 sm:py-7 flex-1 w-full flex flex-col items-center">
        {children}
      </main>
    </>
  );
}

export default Layout;