"use client"

import Image from "next/image"
import { PickaxesCard as PickaxesCard } from "@/lib/types"
import { useClicker } from "@/lib/ClickerContext"

export default function PickaxeCard({ price, name, id, owned, current }: PickaxesCard & { id: number, current: boolean, owned: boolean }) {

  return (
    <div className='flex flex-col text-3xl text-white'>
      <div className="bg-gradient-to-b flex-1 flex flex-col items-center p-3" style={{ backgroundColor: price ? price === 800 ? "#319236" : price === 1200 ? "#4c51f7" : price === 1500 ? "#9d4dbb" : price === 2000 ? "#f3af19" : "lightgray" : "lightgray" }}>
        <div className="flex flex-1 items-center justify-center">
          <Image width={450} height={800} src={`/images/pickaxes/${id}.webp`} alt="pickaxe" />
        </div>
      </div>
      <p className="text-center text-3xl bg-slate-900 w-full p-3">{name}</p>
      <button className="bg-black text-slate-100 p-2 flex items-center justify-center gap-3 cursor-pointer" onClick={() => { }}>
        {
          current ? <p>Wybrany</p> :
            owned ? <p>Wybierz</p> :
              <>
                <p>{price} </p>
                <Image src="/images/vbucks.webp" alt="vbucks" width={40} height={40} />
              </>
        }
      </button>
    </div>
  )
}
