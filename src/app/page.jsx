import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/custom/Header";
import { Settings, Upload, Brain, Eye } from "lucide-react";
import LandingCards from "@/components/landing/LandingCards";
import Profile from "@/components/user/Profile";

export default function Home() {
  return (
    <div className="flex flex-col h-screen-dynamic overflow-hidden">
      <Header>
        <Profile/>
      </Header>
      <div className="flex-1 overflow-auto">
        <main className="flex flex-col justify-center items-center flex-1">
          <section className="flex items-center justify-center relative bg-card border-1 border-border w-full">
            <div className="absolute top-20 h-20 w-80 bg-primary rounded-full blur-3xl z-1 opacity-0 dark:animate-pulse"></div>
              <div className="h-full w-full flex flex-col items-center justify-center pt-10 pb-8 md:pt-20 md:pb-15 z-2 dark:backdrop-brightness-90 gap-8">
                <div className="max-w-150 sm:max-w-200 flex items-center justify-center flex-col gap-3 p-3 pb-0 animate-fade-in">
                  <div className="font-bold font-heading text-center text-landing sm:text-3xl md:text-4xl">
                    <h1>Grading, Reimagined.</h1>
                    <div className="text-center flex flex-col sm:gap-[0.25em] sm:flex-row"><span>Powered by</span> <h1><span className="text-primary">Artificial Intelligence</span>.
                    </h1>
                    </div>
                  </div>
                  <p className="text-center text-md sm:text-lg text-muted-foreground px-3 pb-0">Stop spending nights grading papers. GradeIQ uses advanced AI to provide instant, accurate, and insightful feedback, so you can focus on what matters most: teaching.</p>
                </div>
                <Link href={"/app"}>
                  <Button className="text-lg font-semibold px-7 py-6 shadow-primary shadow-2xl animate-fade-in">
                    Start Grading for Free
                  </Button>
                </Link>
            </div>
          </section>
          <section className="flex justify-center mt-2 sm:mt-3 w-full max-w-250 mx-4">
            <LandingCards cards={[
              {
                title: "Set your grading criteria",
                icon: <Settings size={32} className="text-primary" />
              },
              {
                title: "Students upload assignments",
                icon: <Upload size={32} className="text-primary" />
              },
              {
                title: "Our AI grades them instantly",
                icon: <Brain size={32} className="text-primary" />
              },
              {
                title: "You review and verify results",
                icon: <Eye size={32} className="text-primary" />
              },
            ]}/>
          </section>
        </main>
        <footer className="flex items-center justify-center py-4">
          <p className="text-center w-fit">&copy; GradeIQ, 2025</p>
        </footer>
      </div>
    </div>
  );
}
