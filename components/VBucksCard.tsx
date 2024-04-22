"use client"

import Image from "next/image"
import { VBucksCard as VBucksCardProps } from "@/lib/types"
import { useClicker } from "@/lib/ClickerContext"

export default function VBucksCard({price, quantity, id}: VBucksCardProps) {
  const {buyVbucks} = useClicker()
  return (
    <div className='flex flex-col text-4xl text-white'>
        <div className="bg-gradient-to-b flex-1 from-[#02A2D4] to-[#34D7F0] flex flex-col items-center p-6">
            <div className="flex flex-1 items-center justify-center">
                <Image width={450} height={450} src={`/images/vbucks/${quantity}vbucks.webp`} alt="qbucks"/>
            </div>
            <div className="text-center text-6xl">
                <p>{quantity}</p>
                <p>V-BUCKS</p>
            </div>
        </div>
        <button className="bg-fn-yellow text-black p-4 text-center cursor-pointer" onClick={() => buyVbucks(id)}>
           {price} klikniec
        </button>
    </div>
  )
}
