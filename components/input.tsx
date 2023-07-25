import Image from "next/image";
import React from "react";

type Props = {
  icon: string;
};
export default function Input({ icon }: Props) {
  return (
    <div className='flex relative md:mx-auto md:w-1/4 w-full max-w-md'>
      <input
        className='bg-offWhite transition h-8 px-5 pr-10 rounded-md focus:outline-none w-full text-black text-16 '
        type='search'
        name='search'
        placeholder='Search'
      />
      {icon && (
        <button type='submit' className='absolute right-2 top-1'>
          <Image
            className=' h-6 w-6 fill-current'
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
