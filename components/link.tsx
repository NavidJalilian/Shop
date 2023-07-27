import Link from "next/link";
import React, {AnchorHTMLAttributes} from "react";

type Props = {
    variant?: "contained" | "outlined";
    children: React.ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export default function StyledLink({
                                       variant = "contained",
                                       children,
                                       className,
                                       ...props
                                   }: Props) {
    switch (variant) {
        case "contained":
            return (
                <Link
                    className={`bg-purple px-10  text-sm shadow-sm text-white
        font-sans tracking-wider  text-purple-100 rounded-md 
         hover:shadow-md py-2  ${className}`}
                    {...props}
                >
                    {children}
                </Link>
            );
        case "outlined":
            return (
                <Link
                    className='text-purple px-10 py-2  text-sm shadow-sm bg-white border-2 border-gray
        font-medium tracking-wider  text-purple-100 rounded-md 
        hover:bg-purple-800'
                    {...props}
                >
                    {children}
                </Link>
            );
        default:
            return <></>;
    }
}
