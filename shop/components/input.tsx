import Image from "next/image";
import React from "react";

export default function Input() {
  return (
    <div className='flex relative mx-auto w-1/4 max-w-md'>
      <input
        className='bg-offWhite transition h-8 px-5 pr-10 rounded-md focus:outline-none w-full text-black text-16 '
        type='search'
        name='search'
        placeholder='Search'
      />
      <button type='submit' className='absolute right-2 '>
        <Image
          className=' h-6 w-6 fill-current'
          src='/svgs/search.svg'
          width={20}
          height={20}
          alt='search icon'
        />
      </button>
    </div>
  );
}
