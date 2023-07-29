import React from 'react'
import Image from "next/image";

export type CardPropsType = { name: string, percent: string, offPrice: string, url: string, desc: string, price: string };
export default function Card({

                                 name,
                                 url,
                                 desc,
                                 price,
                                 offPrice,
                                 percent
                             }: CardPropsType) {
    return (
        <div
            className="mx-auto mt-11 w-64 transform overflow-hidden rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-lg">
            <Image className="h-48 w-full object-cover object-center"
                   width={200}
                   height={300}
                   src={url}
                   alt={`Product image of ${name}`}/>
            <div className="p-4">
                <h2 className="mb-2 text-lg font-medium text-gray-900">{name}</h2>
                <p className="mb-2 text-base text-gray-700">{desc}</p>
                <div className="flex items-center">
                    <p className="mr-2 text-lg font-semibold text-gray-900">{price}</p>
                    <p className="text-base font-medium text-gray-500 line-through dark:text-gray-300">{offPrice}</p>
                    <p className="ml-auto text-base font-medium text-green-500">{percent} off</p>
                </div>
            </div>
        </div>
    )
}
