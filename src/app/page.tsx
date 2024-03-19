import Image from "next/image";
import CodePage from "./_page/code";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Footer from "@/components/common/footer";
import SquigglyLines from "@/components/common/SquigglyLines";

export default function Home() {
  return (
    <main className="container min-h-screen  space-y-6 p-8 md:p-10 pt-3 md:pt-5">
      <div className="z-10  w-full items-center justify-between font-mono text-sm lg:flex border-b p-2 border-slate-300">
        <Link href="/" className="flex gap-3 items-center">
          <Image
            src="/logo.svg"
            alt="Json Translate"
            className="dark:invert"
            width={36}
            height={24}
            priority
          />
          <h1 className="text-2xl font-semibold tracking-tight">
            Json Translate
          </h1>
        </Link>

        <Button className="bg-secondary-foreground">Login</Button>
      </div>

      <h2 className="text-3xl font-bold md:text-4xl my-16 max-w-xl text-center mx-auto pb-[6rem]">
        Translate your json <br /> into{" "}
        <span className="relative whitespace-nowrap text-[#3290EE]">
          different languages
          <SquigglyLines />
        </span>
        , easily
      </h2>

      {/* code page */}
      <CodePage />

      <h2 className="text-2xl font-semibold">How it work</h2>
      <p>
        We use OpenAI models to translate your json file, and we did not store
        the json, you own your data
      </p>
      <Footer />
    </main>
  );
}
