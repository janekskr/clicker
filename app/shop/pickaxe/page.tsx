"use client"

import { PickaxeCard } from '@/components'
import { useClicker } from '@/lib/ClickerContext'
import { Pickaxes } from '@/lib/constants'

export default function BuyVbucks() {
  const {pickaxe} = useClicker()
  return (
    <main className='bg-[url(/images/bg1.png)]'>
      <div className='w-[70%] h-[70%] flex flex-col gap-8 mt-[-60px]'>
        <h1 className='text-white text-5xl'>KILOFY</h1>
        <div className='grid grid-cols-4 gap-3 flex-1'>
          {
            Pickaxes.map((x, index) => <PickaxeCard price={x.price} name={x.name} id={index+1} current={pickaxe === x.id} owned={true} />)
          }
        </div>
      </div>
    </main>
  )
}
