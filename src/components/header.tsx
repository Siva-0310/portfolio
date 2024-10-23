"use client";

import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";


const Header: FC = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false); // Start with the menu closed

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleResize = () => {
        if (window.innerWidth >= 640) {
            setIsMenuOpen(false);
        }
    }

    useEffect(() => {
        window.addEventListener('resize',handleResize);
        return () => {
            window.removeEventListener('resize',handleResize)
        }
    },[])

    return (
        <header className="border-b-0.5 my-2 sticky top-0 z-40">
            <nav className="p-4 flex">
                <ul className="w-full hidden sm:flex justify-center space-x-5">
                    <li><Link href="/#about">About</Link></li>
                    <li><Link href="/#experience">Experience</Link></li>
                    <li><Link href="/#projects">Projects</Link></li>
                    <li><Link href="/#contact">Contact</Link></li>
                    <li><Link href="/blogs">Blogs</Link></li>
                </ul>
                <button className="ml-auto sm:hidden" onClick={toggleMenu}>
                    {isMenuOpen ? (<RxCross2 size={24}/>) : (<GiHamburgerMenu size={24}/>)}
                </button>
            </nav>
            {isMenuOpen && (
                <nav className="sm:hidden h-screen flex flex-col justify-start p-4">
                    <ul className="space-y-2">
                        <li className="py-2 border-b-0.5"><Link href="/#about">About</Link></li>
                        <li className="py-2 border-b-0.5"><Link href="/#experience">Experience</Link></li>
                        <li className="py-2 border-b-0.5"><Link href="/#projects">Projects</Link></li>
                        <li className="py-2 border-b-0.5"><Link href="/#contact">Contact</Link></li>
                        <li className="py-2 border-b-0.5"><Link href="/blogs">Blogs</Link></li>
                    </ul>
                </nav>
            )}
        </header>
    );
}

export default Header;