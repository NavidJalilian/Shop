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
    <div className='   '>
      <div className='flex justify-between w-full mb-12'>
        <div className='w-full   flex'>
          <Image
            className='w-full bg-gray-400 hidden lg:block lg:w-5/12 bg-cover aspect-square '
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
