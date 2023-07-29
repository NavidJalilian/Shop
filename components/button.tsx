import React, {ButtonHTMLAttributes} from "react";

type Props = {
    variant?: "contained" | "outlined";
    children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
                                   variant = "contained",
                                   children,
                                   className,
                                   ...props
                               }: Props) {
    switch (variant) {
        case "contained":
            return (
                <button
                    className={`bg-purple px-10  text-sm shadow-sm text-white
        font-sans tracking-wider  text-purple-100 rounded-md 
         hover:shadow-md  ${className}`}
                    {...props}
                >
                    {children}
                </button>
            );
        case "outlined":
            return (
                <button
                    className='text-purple px-10  text-sm shadow-sm bg-white border-2 border-gray
        font-medium tracking-wider  text-purple-100 rounded-md 
        hover:bg-purple-800'
                    {...props}
                >
                    {children}
                </button>
            );
        default:
            return <></>;
    }
}
