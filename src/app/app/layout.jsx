"use server"

import Header from "@/components/custom/Header";
import Navbar from "@/components/custom/Navbar";
import Profile from "@/components/user/Profile";

function AppLayout({children}) {
  return (
    <div className="overflow-hidden h-screen-dynamic flex flex-col">
      <Header>
        <div className="flex flex-row flex-1 justify-end sm:justify-between items-center h-full">
          <Navbar/>
          <Profile/>
        </div>
      </Header>
      <main className="py-5 overscroll-contain px-4 sm:px-6 sm:py-7 flex-1 w-full flex flex-col items-center overflow-auto">
        {children}
      </main>
    </div>
  );
}

export default AppLayout;