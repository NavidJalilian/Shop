"use client";
import Swiper from "@/components/swiper";
import Image from "next/image";
import SeasonBanner from "@/components/seasonBanner";
import Card, {CardPropsType} from "@/components/card";
import React from "react";
import Footer from "@/components/footer";
import Testemonial from "@/components/testemonial";

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

function Heading({title}) {
    return <div className='flex items-center gap-4 px-20 font-semibold'>

        <hr className='inline h-7 w-2 rounded bg-purple'/>
        <span className='text-32'>
               {title}
                 </span>
    </div>;
}

export default function Home() {
    return (
        <main className=''>
            <Swiper>
                <div className='relative h-screen w-screen flex-shrink-0 flex-grow pt-20'>
                    <Image
                        alt='Mountains'
                        src='/hero.webp'
                        fill
                        sizes='100vw'
                        quality={100}
                        draggable={false}
                    />
                </div>
                <div className='relative h-screen w-screen flex-shrink-0 flex-grow pt-20'>
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
            <div className='flex items-center gap-4 px-20 font-semibold'>

                <hr className='inline h-7 w-2 rounded bg-purple'/>
                <span className='text-32'>
                  New Arrival
                </span>
            </div>
            <div className='flex flex-wrap p-20 pt-10'>

                {data.map(item => <Card key={item.name} {...item}/>)}
            </div>
            <Heading title=' Categories For Men'/>
            <section className='flex flex-wrap p-20 pt-10'>

                {categories.map(({url, name, desc, percent, offPrice, price}) => <div
                    className="mx-auto mt-11 w-64 transform overflow-hidden rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-lg">
                    <Image className="w-full object-cover object-center h-62"
                           width={150}
                           height={300}
                           src={url}
                           alt={`Product image of ${name}`}/>
                    <div className="p-4">
                        <h2 className="mb-2 text-lg font-medium text-gray-900">{name}</h2>
                        <p className="mb-2 text-base text-gray-700">{desc}</p>
                        <div className="flex items-center">
                            <p className="ml-auto text-base font-medium text-green-500">
                                <svg width="20" height="14" viewBox="0 0 20 14" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M18.9571 7.71798C19.2843 7.39075 19.2843 6.86022 18.9571 6.533L13.6247 1.20059C13.2975 0.873368 12.7669 0.873368 12.4397 1.20059C12.1125 1.52781 12.1125 2.05835 12.4397 2.38557L17.1796 7.12549L12.4397 11.8654C12.1125 12.1926 12.1125 12.7232 12.4397 13.0504C12.7669 13.3776 13.2975 13.3776 13.6247 13.0504L18.9571 7.71798ZM0.489258 7.9634L18.3646 7.9634V6.28758L0.489258 6.28758L0.489258 7.9634Z"
                                        fill="#797979"/>
                                </svg>

                            </p>
                        </div>
                    </div>
                </div>)}
            </section>
            <Heading title='Categories for Men'/>
            <section className='flex flex-wrap p-20 pt-10'>

                {categories.map(({url, name, desc, percent, offPrice, price}) => <div
                    className="mx-auto mt-11 w-64 transform overflow-hidden rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-lg">
                    <Image className="w-full object-cover object-center h-62"
                           width={150}
                           height={300}
                           src={url}
                           alt={`Product image of ${name}`}/>
                    <div className="p-4">
                        <h2 className="mb-2 text-lg font-medium text-gray-900">{name}</h2>
                        <p className="mb-2 text-base text-gray-700">{desc}</p>
                        <div className="flex items-center">
                            <p className="ml-auto text-base font-medium text-green-500">
                                <svg width="20" height="14" viewBox="0 0 20 14" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M18.9571 7.71798C19.2843 7.39075 19.2843 6.86022 18.9571 6.533L13.6247 1.20059C13.2975 0.873368 12.7669 0.873368 12.4397 1.20059C12.1125 1.52781 12.1125 2.05835 12.4397 2.38557L17.1796 7.12549L12.4397 11.8654C12.1125 12.1926 12.1125 12.7232 12.4397 13.0504C12.7669 13.3776 13.2975 13.3776 13.6247 13.0504L18.9571 7.71798ZM0.489258 7.9634L18.3646 7.9634V6.28758L0.489258 6.28758L0.489258 7.9634Z"
                                        fill="#797979"/>
                                </svg>

                            </p>
                        </div>
                    </div>
                </div>)}

            </section>
            <Heading title='Feedback'/>
            <section className='flex gap-4  p-20 pt-10 flex-wrap'>

                <Testemonial/>
                <Testemonial/>
                <Testemonial/>
                <Testemonial/>
            </section>
            <Footer/>
        </main>
    );
}
