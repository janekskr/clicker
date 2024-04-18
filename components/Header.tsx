"use client";

import { useClicker } from "@/lib/ClickerContext";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  const { vbucks, clicks } = useClicker();
  return (
    <ul className="w-full flex justify-between items-center px-10 py-4 bg-sky-500 text-4xl text-white">
      <li>
        <Link href="/">Klikacz</Link>
      </li>
      <li className="flex items-center gap-2">
        <p>klikniecia:</p>
        <p>{clicks}</p>
      </li>
      <li className="flex items-center gap-4">
        <Link href="/shop/vbucks" className=" bg-fn-yellow text-black py-2 px-5 rounded-lg text-3xl">
          Kup
        </Link>
        <div className="flex items-center gap-3">
        <Image width={50} height={50} src="/images/vbucks.webp" alt="vbucks" />
        <p>{vbucks}</p>
        </div>
      </li>
    </ul>
  );
}
