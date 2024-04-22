import { PickaxeCard } from '@/components'
import { Pickaxes } from '@/lib/constants'

export default function BuyVbucks() {
  return (
    <main className='bg-[url(/images/bg1.png)]'>
      <div className='w-[70%] h-[70%] overflow-y-scroll pb-[20px] no-scrollbar flex flex-col gap-8 mt-[-60px]'>
        <h1 className='text-white text-5xl'>KILOFY</h1>
        <div className='grid grid-cols-4 gap-3 flex-1'>
          {
            Pickaxes.map((x, index) => <PickaxeCard price={x.price} name={x.name} id={index+1} key={x.id}/>)
          }
        </div>
      </div>
    </main>
  )
}
