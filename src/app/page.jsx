import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/custom/Header";
import Logo from "@/components/custom/Logo";

export default function Home() {
  return (
    <>
      <Header showNavbar={false}/>
      <main className="flex items-center justify-center flex-col gap-10 mt-15 relative">
        <div className="absolute top-10 h-20 w-60 bg-primary rounded-full blur-3xl -z-1"></div>
        <div className="max-w-150 flex items-center justify-center flex-col gap-3">
          <div>
            <h1 className="font-bold text-3xl font-heading text-center">Grading, Reimagined</h1>
            <div className="font-bold text-3xl font-heading text-center flex flex-col sm:gap-[0.25em] sm:flex-row"><span>Powered by</span> <h1><span className="text-primary">Artificial Intelligence</span>.
            </h1>
            </div>
          </div>
          <p className="text-center text-lg text-muted-foreground px-3">Stop spending nights grading papers. GradeIQ uses advanced AI to provide instant, accurate, and insightful feedback, so you can focus on what matters most: teaching.</p>
        </div>
        <Link href={"/app"}><Button className="text-lg font-semibold px-7 py-6 shadow-primary shadow-2xl">Start Grading for Free</Button></Link>
      </main>
    </>
  );
}
