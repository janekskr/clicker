"use client";

import { ProgressBar } from "@/components";
import { useClicker } from "@/lib/ClickerContext";
import Image from "next/image";

export default function Home() {
  const { setClicks, pickaxe, level } = useClicker();

  const handleClick = () => {
    setClicks((prev) => prev + level);
  };

  // useEffect(() => {
  //   const interval = setInterval(generateResources, 1000); // 1000ms = 1 second
  //   return () => clearInterval(interval); // Clean up the interval when the component unmounts
  // }, [resources]); // Run useEffect whenever resources change

  return (
    <main className="bg-[url(/images/bg2.jpg)] flex-col justify-start p-10">
      <ProgressBar />
      <main>
        <button className="cursor-pointer" onClick={handleClick}>
          <Image
            width={400}
            height={400}
            alt="pickaxe"
            src={`/images/pickaxes/${pickaxe}.webp`}
            className="pointer-events-none"
          />
        </button>
      </main>
    </main>
  );
}
