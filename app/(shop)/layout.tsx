import React from "react";
import {Metadata} from "next";
import "../globals.css";
import Header from "@/components/header";
import {Inter} from "next/font/google";

export const metadata: Metadata = {
    title: "Test",
    description: "Generated by create next app",
};
const inter = Inter({subsets: ["latin"]});

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <>


            <Header/>
            {children}


        </>
    );
}
