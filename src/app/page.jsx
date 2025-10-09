import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/custom/Header";
import Logo from "@/components/custom/Logo";

export default function Home() {
  return (
    <>
      <Header showNavbar={false}/>
      <main className="flex items-center justify-center flex-col gap-6 mt-20">
        <div className="max-w-150 flex items-center justify-center flex-col gap-3">
          <div>
            <h1 className="font-bold text-3xl font-heading text-center">Grading, Reimagined</h1>
            <h1 className="font-bold text-3xl font-heading text-center">Powered by <span className="text-primary">Artificial Intelligence</span>.</h1>
          </div>
          <p className="text-center text-xl text-muted-foreground">Stop spending nights grading papers. GradeIQ uses advanced AI to provide instant, accurate, and insightful feedback, so you can focus on what matters most: teaching.</p>
        </div>
        <Link href={"/app"}><Button className="text-lg font-semibold">Start Grading for Free</Button></Link>
      </main>
    </>
  );
}
