import Image from "next/image";
import React from "react";

type Props = {
    icon: string;
};
export default function Input({icon}: Props) {
    return (
        <div className='relative flex w-full max-w-md md:mx-auto md:w-1/4'>
            <input
                className='h-8 w-full rounded-md px-5 pr-10 text-black transition bg-offWhite text-16 focus:outline-none'
                type='search'
                name='search'
                placeholder='Search'
            />
            {icon && (
                <button type='submit' className='absolute top-1 right-2'>
                    <Image
                        className='h-6 w-6 fill-current'
                        src={icon}
                        width={20}
                        height={20}
                        alt='search icon'
                    />
                </button>
            )}
        </div>
    );
}
