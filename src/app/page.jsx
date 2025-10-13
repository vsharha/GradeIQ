import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/custom/Header";
import { ArrowRight, Settings, Upload, Brain, Eye } from "lucide-react";
import LandingCard from "@/components/custom/LandingCard";

export default function Home() {
  return (
    <div>
      <Header>
        <Link href={"/app"}>
          <Button>Log in</Button>
        </Link>
      </Header>
      <main className="pb-10 flex flex-col justify-center items-center">
        <section className="flex items-center justify-center relative bg-card border-1 border-border w-full">
          <div className="absolute top-20 h-20 w-80 bg-primary rounded-full blur-3xl z-1  opacity-0 dark:animate-pulse"></div>
          <div className="h-full w-full flex flex-col items-center justify-center pt-10 pb-8 md:pt-20 md:pb-15 z-2 dark:backdrop-brightness-90 gap-8">
            <div className="max-w-150 sm:max-w-200 flex items-center justify-center flex-col gap-3 p-3 animate-fade-in">
              <div className="font-bold font-heading text-center text-2xl sm:text-3xl md:text-4xl">
                <h1>Grading, Reimagined.</h1>
                <div className="text-center flex flex-col sm:gap-[0.25em] sm:flex-row"><span>Powered by</span> <h1><span className="text-primary">Artificial Intelligence</span>.
                </h1>
                </div>
              </div>
              <p className="text-center text-sm sm:text-lg text-muted-foreground px-3">Stop spending nights grading papers. GradeIQ uses advanced AI to provide instant, accurate, and insightful feedback, so you can focus on what matters most: teaching.</p>
            </div>
            <Link href={"/app"}><Button className="text-lg font-semibold px-7 py-6 shadow-primary shadow-2xl animate-fade-in">Start Grading for Free</Button></Link>
          </div>
        </section>
        <section className="p-3 mt-0 flex flex-col items-center sm:mt-3 sm:flex-row mx-15 h-65 md:h-60 lg:h-50 max-w-content m-auto">
          <LandingCard>
            <div className="flex items-center flex-1">
              <h1 className="text-xl font-bold">
                Set your grading criteria
              </h1>
            </div>
            <div className="h-fit">
              <Settings size={32} className="text-primary" />
            </div>
          </LandingCard>
          <LandingCard>
            <div className="flex items-center flex-1">
              <h1 className="text-xl font-bold">
                Students upload assignments
              </h1>
            </div>
            <div className="h-fit">
              <Upload size={32} className="text-primary" />
            </div>
          </LandingCard>
          <LandingCard>
            <div className="flex items-center flex-1">
              <h1 className="text-xl font-bold">
                Our AI grades them instantly
              </h1>
            </div>
            <div className="h-fit">
              <Brain size={32} className="text-primary" />
            </div>
          </LandingCard>
          <LandingCard>
            <div className="flex items-center flex-1">
              <h1 className="text-xl font-bold">
                You review and verify results
              </h1>
            </div>
            <div className="h-fit">
              <Eye size={32} className="text-primary" />
            </div>
          </LandingCard>
        </section>
      </main>
    </div>
  );
}
