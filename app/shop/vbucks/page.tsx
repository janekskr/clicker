import { VBucksCard } from '@/components'
import { Vbucks } from '@/lib/constants'

export default function BuyPickaxe() {
  return (
    <main className='bg-[url(/images/bg1.png)]'>
      <div className='w-[70%] h-[70%] flex flex-col gap-8 mt-[-60px]'>
        <h1 className='text-white text-5xl'>V-BUCKS</h1>
        <div className='grid grid-cols-4 gap-3 flex-1'>
          {
            Vbucks.map(x => <VBucksCard price={x.price} quantity={x.quantity} id={x.id} key={x.id} />)
          }
        </div>
      </div>
    </main>
  )
}