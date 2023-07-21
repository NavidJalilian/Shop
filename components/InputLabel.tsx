import Image from "next/image";
import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  HtmlHTMLAttributes,
} from "react";

type Props = { name: string } & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export default function InputLabel({ name, ...props }: Props) {
  return (
    <>
      <label htmlFor={name} className='text-darkGray text-16  '>
        {name}
        <input
          className='outline outline-1 outline-gray  transition mt-2 h-8 px-5 pr-10 rounded-md  w-full text-black  '
          name={name}
          id={name}
          {...props}
        />
      </label>
    </>
  );
}
