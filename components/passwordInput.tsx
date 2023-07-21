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
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className='flex items-center space-x-2 rounded-md bg-gray-50 p-2'>
      <input
        type={showPassword ? "text" : "password"}
        placeholder='Password'
        {...props}
        className='border-none bg-transparent text-lg text-gray-900 focus:outline-none'
      />

      <button className='block' onClick={toggleShowPassword}>
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
