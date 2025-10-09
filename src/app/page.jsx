import { ModeToggle } from "@/components/ui/mode-toggle";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex items-center justify center flex-col gap-3 mt-20">
      <h1 className="text-3xl w-fit font-bold">GradeIQ</h1>
      <h2 className="w-fit text-xl">The future of teaching, now</h2>
      <Link href={"/app"}><Button className="text-lg">Try it</Button></Link>
    </main>
  );
}
