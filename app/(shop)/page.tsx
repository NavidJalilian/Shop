"use client";
import Swiper from "@/components/swiper";
import Image from "next/image";

export default function Home() {
    return (
        <main className=''>
            <Swiper width={'500vw'}>

                <Image src='/login.webp' className='w-screen' fill={true} alt='jjbyj'
                       draggable={false}/>
                <Image src='/login.webp' alt='jjbyj' fill={true}
                       draggable={false}/>

            </Swiper>
        </main>
    );
}
