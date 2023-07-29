import React from 'react'
import Image from "next/image";
import Rating from "@/components/rating";

export default function Testemonial() {
    return (
        <article
            className='relative flex w-full w-1/3 flex-col gap-4 rounded-md border px-3 py-2 border-1 border-lightGray'>


            <Image src='/testemonial.png' alt='testemonial image of a person' className='' width={55}
                   height={55}/>
            <Rating value={4} className='absolute top-3 right-4'/>
            <h6 className='font-medium text-20'>Floyd Miles</h6>
            <p className="text-12">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
                duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit
                aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam
                consequat sunt nostrud amet.
            </p>
        </article>

    )
}
