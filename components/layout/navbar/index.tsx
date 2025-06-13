import Image from "next/image";
import Link from "next/link";

import { LogoDark } from '@/assets';
import { Button } from "@/components/ui/button";

export default function NavBar() {
    return (
        <header className="fixed hidden md:block left-1/2 -translate-x-1/2 top-8 z-20 bg-white border border-grey-100 rounded-2xl w-full max-w-7xl  px-4 @7xl:px-0 shadow-card-md">
            <nav className="flex  items-center">
                <h1>
                    <Link href="/">
                        <Image
                            src={LogoDark}
                            alt="Al Says Trading & Contracting Logo"
                        />
                    </Link>
                </h1>
                <ul className="flex space-x-4 flex-1 text-grey-800 title-md justify-center">
                    <li><Link href="/" className="hover:underline ">Home</Link></li>
                    <li><Link href="/about-us  " className="hover:underline">About</Link></li>
                    <li><Link href="/contact-us" className="hover:underline">Contact</Link></li>
                    <li><Link href="/blog" className="hover:underline">Blog</Link></li>
                </ul>
                <Button className="font-bold">Contact</Button>
            </nav>
        </header>
    )
}
