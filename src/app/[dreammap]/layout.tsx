import {Inter} from "next/font/google";
import Header from "@component/header/Header";

const inter = Inter({subsets: ["latin"]});

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="">
            <Header/>
            {children}
        </div>
    );
}
