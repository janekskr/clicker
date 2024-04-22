"use client";

import { Asside, ProgressBar } from "@/components";
import { useClicker } from "@/lib/ClickerContext";
import Image from "next/image";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Home() {
  const { setClicks, pickaxe, level } = useClicker();

  const audio = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    audio.current = new Audio("/sound.mp3")
  }, [])

  const handleClick = () => {
    setClicks((prev) => prev + level);
    audio.current?.play()
  };

  return (
    <main className="bg-[url(/images/bg2.jpg)] flex flex-col p-10">
      <ProgressBar />
      <section className="flex flex-1 w-full relative">
        <Asside />
        <div className="flex-1 flex justify-center items-center">
          <button className="cursor-pointer" onClick={handleClick}>
            <motion.div
              whileHover={{ scale: 1.05, rotate: 10 }}
              whileTap={{
                scale: 0.9,
                rotate: -60,
                borderRadius: "100%",
              }}
            >
              <Image
                width={400}
                height={400}
                alt="pickaxe"
                src={`/images/pickaxes/${pickaxe}.webp`}
                className="pointer-events-none"
              />
            </motion.div>
          </button>
        </div>
      </section>
    </main>
  );
}
