"use client";
import Image from "next/image";
import React, { useState } from "react";

type Props = {} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
const PasswordInput = ({ ...props }: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className='flex items-center space-x-2 rounded-md bg-gray-50 mt-2 relative'>
        <label htmlFor='password' className='text-darkGray text-16 flex flex-col center  w-full'>
            Password
            <input
                type={showPassword ? "text" : "password"}
                placeholder='Password'
                {...props}
                className='outline outline-1 outline-gray  transition mt-2 h-8 px-5 pr-10 rounded-md  w-full text-black  '

            />

        </label>


      <button className='block  absolute right-5 top-10' onClick={toggleShowPassword}>
        {showPassword ? (
          <Image src='/svgs/eye.svg' alt='eye icon' width={20} height={20} />
        ) : (
          <Image
            src='/svgs/closeEye.svg'
            alt='close icon'
            width={20}
            height={20}
          />
        )}
      </button>
    </div>
  );
};

export default PasswordInput;
