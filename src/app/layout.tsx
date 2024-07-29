import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Sidebar from "@component/sidebar/Sidebar";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "MatoryBoard",
    description: "maidmap + storyboard very easy and powerfull",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <div className='sidebar'>
        <Sidebar/>
        {children}
        </div>
        </body>
        </html>
    );
}
