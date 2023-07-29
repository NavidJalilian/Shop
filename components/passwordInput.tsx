"use client";
import Image from "next/image";
import React, {useState} from "react";

type Props = {} & React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>;
const PasswordInput = ({...props}: Props) => {
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <div className='relative mt-2 flex items-center rounded-md bg-gray-50 space-x-2'>
            <label htmlFor='password' className='flex w-full flex-col text-darkGray text-16 center'>
                Password
                <input
                    type={showPassword ? "text" : "password"}
                    placeholder='Password'
                    {...props}
                    className='mt-2 h-8 w-full rounded-md px-5 pr-10 text-black outline outline-1 transition outline-gray'

                />

            </label>


            <button className='absolute top-10 right-5 block' onClick={toggleShowPassword}>
                {showPassword ? (
                    <Image src='/svgs/eye.svg' alt='eye icon' width={20} height={20}/>
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
