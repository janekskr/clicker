"use client"

import Link from "next/link";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import { motion, AnimatePresence } from "framer-motion";
import { useClicker } from "@/lib/ClickerContext";
import { calculateCost } from "@/lib/utils";
import Image from "next/image";

export default function Asside() {
  const [show, setShow] = useState<boolean>(false);

  const {buyAutoMiner, miner} = useClicker()

  return (
    <AnimatePresence>
      {show && (
        <motion.aside
          key="asside"
          initial={{ scale: 0, rotate: 180 }}
          animate={{ rotate: 0, scale: 1 }}
          exit={{ scale: 0, rotate: -180 }}
          className="flex gap-6 items-start absolute min-w-[400px] h-full top-4 flex-col bg-[rgba(0,0,0,.8)] rounded-2xl p-6"
        >
          <FaArrowLeft
            size={30}
            fill="white"
            onClick={() => setShow(false)}
            className="cursor-pointer"
          />
          <Link
            href="/shop/pickaxe"
            className=" bg-fn-yellow text-black py-2 px-5 rounded-lg text-3xl"
          >
            Kliofy
          </Link>
          <div className="text-2xl text-white">
            {miner.level > 0  && <p>Poziom auto minera: {miner.level}</p>}
            <p>Koszt {miner.level > 0 ? "ulepszenia": "kupna"}: {calculateCost(miner.level)} V-bucks</p>
            {miner.level > 0 && <p className="flex gap-1">{miner.benefit} <Image width={30} height={30} src="/images/vbucks.webp" alt="vbucks" /> / {(miner.duration / 1000)}s</p>} 
            <button onClick={buyAutoMiner} className="bg-green-500 px-4 py-2 rounded-md mt-2">{miner.level > 0 ? "Ulepsz": "Kup"} Auto Miner</button>
          </div>
        </motion.aside>
      )}
      {!show && (
        <motion.button
          key="button"
          onClick={() => setShow(true)}
          className="cursor-pointer p-2 rounded-full absolute top-4 bg-[rgba(0,0,0,.8)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <FaArrowRight size={30} fill="white" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
