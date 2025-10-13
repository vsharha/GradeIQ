"use server"

import Header from "@/components/custom/Header";
import Navbar from "@/components/custom/Navbar";
import Profile from "@/components/user/Profile";

function AppLayout({children}) {
  return (
    <>
      <Header>
        <div className="flex flex-row flex-1 justify-end sm:justify-between items-center">
          <Navbar/>
          <Profile/>
        </div>
      </Header>
      <main className="py-5 overscroll-contain px-4 sm:px-6 sm:py-7 flex-1 w-full flex flex-col items-center">
        {children}
      </main>
    </>
  );
}

export default AppLayout;