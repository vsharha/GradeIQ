import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/custom/Header";
import Logo from "@/components/custom/Logo";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <>
      <Header showNavbar={false}/>
      <main>
        <div className="flex items-center justify-center flex-col gap-10 pt-15 pb-10 relative bg-card border-1 border-border">
          <div className="absolute top-10 h-20 w-60 bg-primary rounded-full blur-3xl z-1"></div>
            <div className="z-2">
              <div className="max-w-150 flex items-center justify-center flex-col gap-3">
                <div>
                  <h1 className="font-bold text-3xl font-heading text-center">Grading, Reimagined</h1>
                  <div className="font-bold text-3xl font-heading text-center flex flex-col sm:gap-[0.25em] sm:flex-row"><span>Powered by</span> <h1><span className="text-primary">Artificial Intelligence</span>.
                  </h1>
                  </div>
                </div>
                <p className="text-center text-lg text-muted-foreground px-3">Stop spending nights grading papers. GradeIQ uses advanced AI to provide instant, accurate, and insightful feedback, so you can focus on what matters most: teaching.</p>
              </div>
          </div>
          <Link href={"/app"}><Button className="text-lg font-semibold px-7 py-6 shadow-primary shadow-2xl">Start Grading for Free</Button></Link>
        </div>
        <div className="p-3 mt-10">
        </div>
      </main>
    </>
  );
}
