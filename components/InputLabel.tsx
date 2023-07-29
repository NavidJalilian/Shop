import React from "react";

type Props = { name: string } & React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>;

export default function InputLabel({name, ...props}: Props) {
    return (
        <>
            <label htmlFor={name} className='text-darkGray text-16'>
                {name}
                <input
                    className='mt-2 h-8 w-full rounded-md px-5 pr-10 text-black outline outline-1 transition outline-gray'
                    name={name}
                    id={name}
                    {...props}
                />
            </label>
        </>
    );
}
