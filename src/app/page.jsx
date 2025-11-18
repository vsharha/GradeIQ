import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/custom/Header";
import { Settings, Upload, Brain, Eye } from "lucide-react";
import LandingCards from "@/components/landing/LandingCards";
import Profile from "@/components/user/Profile";
import LandingFooter from "@/components/landing/LandingFooter";
import LandingMain from "@/components/landing/LandingMain";

export default function Home() {
  return (
    <div className="flex flex-col h-screen-dynamic overflow-hidden">
      <Header>
        <Profile />
      </Header>
      <div className="flex-1 overflow-auto h-full flex flex-col justify-between">
        <main className="flex flex-col justify-center items-center">
          <LandingMain />
          <section className="flex flex-1 h-full items-center justify-center mt-2 sm:mt-3 w-full max-w-250 mx-4">
            <LandingCards
              cards={[
                {
                  title: "Set your grading criteria",
                  icon: <Settings size={32} className="text-primary" />,
                },
                {
                  title: "Students upload assignments",
                  icon: <Upload size={32} className="text-primary" />,
                },
                {
                  title: "Our AI grades them instantly",
                  icon: <Brain size={32} className="text-primary" />,
                },
                {
                  title: "You review and verify results",
                  icon: <Eye size={32} className="text-primary" />,
                },
              ]}
            />
          </section>
        </main>
        <LandingFooter />
      </div>
    </div>
  );
}
