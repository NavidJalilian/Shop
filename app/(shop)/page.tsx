"use client";
import Swiper from "@/components/swiper";
import Image from "next/image";
import SeasonBanner from "@/components/seasonBanner";
import Card, {CardPropsType} from "@/components/card";
import React from "react";
import Footer from "@/components/footer";

const data: CardPropsType[] = [
    {
        percent: '20%',
        desc: 'greet product to buy',
        name: 'mens',
        url: '/product.png',
        offPrice: '20',
        price: '22'

    }, {
        percent: '20%',
        desc: 'greet product to buy',
        name: 'mens',
        url: '/product.png',
        offPrice: '20',
        price: '22'

    }, {
        percent: '20%',
        desc: 'greet product to buy',
        name: 'mens',
        url: '/product.png',
        offPrice: '20',
        price: '22'

    }, {
        percent: '20%',
        desc: 'greet product to buy',
        name: 'mens',
        url: '/product.png',
        offPrice: '20',
        price: '22'

    }, {
        percent: '20%',
        desc: 'greet product to buy',
        name: 'mens',
        url: '/product.png',
        offPrice: '20',
        price: '22'

    }, {
        percent: '20%',
        desc: 'greet product to buy',
        name: 'mens',
        url: '/product.png',
        offPrice: '20',
        price: '22'

    }, {
        percent: '20%',
        desc: 'greet product to buy',
        name: 'mens',
        url: '/product.png',
        offPrice: '20',
        price: '22'

    }, {
        percent: '20%',
        desc: 'greet product to buy',
        name: 'mens',
        url: '/product.png',
        offPrice: '20',
        price: '22'

    },
]
const categories: CardPropsType[] = [
    {
        percent: '20%',
        desc: 'greet product to buy',
        name: 'mens',
        url: '/category.png',
        offPrice: '20',
        price: '22'

    }, {
        percent: '20%',
        desc: 'greet product to buy',
        name: 'mens',
        url: '/category.png',
        offPrice: '20',
        price: '22'

    }, {
        percent: '20%',
        desc: 'greet product to buy',
        name: 'mens',
        url: '/category.png',
        offPrice: '20',
        price: '22'

    }, {
        percent: '20%',
        desc: 'greet product to buy',
        name: 'mens',
        url: '/category.png',
        offPrice: '20',
        price: '22'

    }, {
        percent: '20%',
        desc: 'greet product to buy',
        name: 'mens',
        url: '/category.png',
        offPrice: '20',
        price: '22'

    }, {
        percent: '20%',
        desc: 'greet product to buy',
        name: 'mens',
        url: '/category.png',
        offPrice: '20',
        price: '22'

    }, {
        percent: '20%',
        desc: 'greet product to buy',
        name: 'mens',
        url: '/category.png',
        offPrice: '20',
        price: '22'

    }, {
        percent: '20%',
        desc: 'greet product to buy',
        name: 'mens',
        url: '/category.png',
        offPrice: '20',
        price: '22'

    },
]
export default function Home() {
    return (
        <main className=''>
            <Swiper>
                <div className='h-screen w-screen pt-20 relative flex-grow flex-shrink-0'>
                    <Image
                        alt='Mountains'
                        src='/hero.webp'
                        fill
                        sizes='100vw'
                        quality={100}
                        draggable={false}
                    />
                </div>
                <div className='h-screen w-screen pt-20 relative flex-grow flex-shrink-0'>
                    <Image
                        draggable={false}

                        alt='Mountains'
                        src='/hero.webp'
                        fill
                        quality={100}

                        sizes='100vw'
                    />
                </div>
            </Swiper>
            <SeasonBanner/>
            <div className='flex px-20 items-center gap-4 font-semibold'>

                <hr className='bg-purple w-2 h-7 rounded inline '/>
                <span className='text-32'>
                  New Arrival
                </span>
            </div>
            <div className='flex flex-wrap p-20 pt-10'>

                {data.map(item => <Card key={item.name} {...item}/>)}
            </div>

            <div className='flex px-20 items-center gap-4 font-semibold'>

                <hr className='bg-purple w-2 h-7 rounded inline '/>
                <span className='text-32'>
                 Categories For Men
                 </span>
            </div>
            <div className='flex flex-wrap p-20 pt-10'>

                {categories.map(({url,name,desc,percent,offPrice,price}) =>  <div
                    className="mx-auto mt-11 w-64 transform overflow-hidden rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-lg">
                    <Image className="h-62 w-full object-cover object-center"
                           width={150}
                           height={300}
                           src={url}
                           alt={`Product image of ${name}`}/>
                    <div className="p-4">
                        <h2 className="mb-2 text-lg font-medium  text-gray-900">{name}</h2>
                        <p className="mb-2 text-base text-gray-700">{desc}</p>
                        <div className="flex items-center">
                            <p className="ml-auto text-base font-medium text-green-500">{percent} off</p>
                        </div>
                    </div>
                </div>)}
            </div>
<Footer />
        </main>
    );
}
