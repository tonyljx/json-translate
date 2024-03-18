import Image from "next/image";
import CodePage from "./_page/code";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="container min-h-screen  space-y-6 p-8 md:p-10 pt-3 md:pt-5">
      <div className="z-10  w-full items-center justify-between font-mono text-sm lg:flex border-b p-2 border-slate-300">
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          className="dark:invert"
          width={100}
          height={24}
          priority
        />
        <Button className="bg-secondary-foreground">Login</Button>
      </div>

      {/* code page */}
      <CodePage />
    </main>
  );
}
