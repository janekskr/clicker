"use client";

import Image from "next/image";
import { PickaxesCard as PickaxesCard } from "@/lib/types";
import { useClicker } from "@/lib/ClickerContext";
import { motion } from "framer-motion";

export default function PickaxeCard({
  price,
  name,
  id,
}: PickaxesCard & { id: number }) {
  const { buyPickaxe, pickaxe, ownedPickaxes, setPickaxe } = useClicker();

  const current = pickaxe === id;
  const owned = ownedPickaxes.includes(id);
  
  return (
    <div className="flex flex-col text-3xl text-white">
      <div
        className="bg-gradient-to-b flex-1 flex flex-col items-center p-3"
        style={{
          backgroundColor: price
            ? price === 800
              ? "#319236"
              : price === 1200
              ? "#4c51f7"
              : price === 1500
              ? "#9d4dbb"
              : price === 2000
              ? "#f3af19"
              : "lightgray"
            : "lightgray",
        }}
      >
        <div className="flex flex-1 items-center justify-center">
          <Image
            width={450}
            height={800}
            src={`/images/pickaxes/${id}.webp`}
            alt="pickaxe"
          />
        </div>
      </div>
      <p className="text-center text-3xl bg-slate-900 w-full p-3">{name}</p>
        {current ? (
          <p className="flex items-center justify-center gap-1 bg-black text-slate-100 p-2">
            Wybrany
            <motion.p
              initial={{ scale: 0, rotate: 180 }}
              animate={{ rotate: 0, scale: 1 }}
            >
              ✅
            </motion.p>
          </p>
        ) : owned ? (
          <button onClick={() => setPickaxe(id)} className="text-center bg-black text-slate-100 p-2">Wybierz</button>
        ) : (
          <button
            onClick={() => buyPickaxe(id)}
            className="flex gap-2 items-center bg-black text-slate-100 p-2 justify-center"
          >
            <p>{price} </p>
            <Image
              src="/images/vbucks.webp"
              alt="vbucks"
              width={35}
              height={35}
            />
          </button>
        )}
      </div>
  );
}
