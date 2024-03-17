import Image from "next/image";
import CodePage from "./_page/code";

export default function Home() {
  return (
    <main className=" min-h-screen  space-y-6 p-10 md:p-12">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          className="dark:invert"
          width={100}
          height={24}
          priority
        />
      </div>

      <CodePage />
    </main>
  );
}
