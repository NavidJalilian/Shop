import Image from "next/image";
import React from 'react'
import Link from "next/link";
export default function SeasonBanner() {
    return (
        <div className=' relative flex flex-col lg:flex-row p-20 justify-center items-center gap-4  '>
            <div className='relative'>
             <Image alt='seasonal Banner' src={'/lightSeason.webp'} width={600} height={330}/>
         <div className='absolute top-0 left-4 py-16 px-4 text-white font-bold capitalize'>

                <h6 className='mb-4'>Low proises</h6>
             <h2 className='text-32 mb-2'>High Coziness</h2>
             <h3>UPTO 50% OFF</h3>
             <Link href={'#'} >
                 <h6 className='mt-14 underline'>

                 Explore Items
                 </h6>
                 </Link>
         </div>
            </div>  <div className='relative'>
            <Image alt='seasonal Banner' src={'/darkSeason.webp'} className='lg:scale-y-105 scale-x-105' width={600} height={330}/>
            <div className='absolute top-0 left-4 py-16 px-4 text-white font-bold capitalize'>
                <h6 className='mb-4'>Low proises</h6>
             <h2 className='text-32 mb-2'>High Coziness</h2>
             <h3>UPTO 50% OFF</h3>
             <Link href={'#'} >
                 <h6 className='mt-14 underline'>

                 Explore Items
                 </h6>
                 </Link>
         </div>
            </div>

        </div>
    )
}






