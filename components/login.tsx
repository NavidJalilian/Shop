"use client";

import Image from "next/image";
import React, {ReactNode} from "react";

type Props = {
    imgUrl?: string;
    children: ReactNode;
};

export default function Login({imgUrl = "/login.webp", children}: Props) {
    return (
        <div className=''>
            <div className='mb-12 flex w-full justify-between'>
                <div className='w-full  h-[calc(100vh-60px)]  flex'>
                    <Image
                        className='hidden aspect-square h-full w-full bg-gray-400 bg-cover lg:block lg:w-5/12'
                        src={imgUrl}
                        alt='login form of users'
                        width={900}
                        height={1200}
                    />
                    {children}
                </div>
            </div>
        </div>
    );
}
