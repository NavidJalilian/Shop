"use client";

import Image from "next/image";
import React, { Children, ReactNode } from "react";
import Button from "./button";

type Props = {
  imgUrl?: string;
  children: ReactNode;
};

export default function Login({ imgUrl = "/login.webp", children }: Props) {
  return (
    <div className='container mx-auto'>
      <div className='flex justify-center px-6 mb-12'>
        <div className='w-full xl:w-3/4 lg:w-11/12 flex'>
          <Image
            className='w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg'
            src={imgUrl}
            alt='login form of users'
            width={700}
            height={950}
          />
          {children}
        </div>
      </div>
    </div>
  );
}
