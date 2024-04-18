"use client";

import { ProgressBar } from "@/components";
import { useClicker } from "@/lib/ClickerContext";
import Image from "next/image";

import {motion} from "framer-motion"
import Link from "next/link";

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
      <main className="relative">
        <Link href="shop/pickaxe"></Link>
        <button className="cursor-pointer" onClick={handleClick}>
          <motion.div   whileHover={{ scale: 1.05, rotate: 10 }}
  whileTap={{
    scale: 0.9,
    rotate: -60,
    borderRadius: "100%"
  }}>
          <Image
            width={400}
            height={400}
            alt="pickaxe"
            src={`/images/pickaxes/${pickaxe}.webp`}
            className="pointer-events-none"
          />
          </motion.div>
        </button>
      </main>
    </main>
  );
}
