"use client";

import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";


const Header: FC = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false); // Start with the menu closed

    const toggleMenu = () => {
        if (!isMenuOpen) {
            window.scrollTo(0,0)
        }
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

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
    }, [isMenuOpen]);

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="bg-dark border-b-0.5 border-border p-4 sticky top-0 z-40 text-lg">
            <nav className="flex">
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
                        <li className="py-2 border-b-0.5 border-border" onClick={handleLinkClick}><Link href="/#about">About</Link></li>
                        <li className="py-2 border-b-0.5 border-border" onClick={handleLinkClick}><Link href="/#experience">Experience</Link></li>
                        <li className="py-2 border-b-0.5 border-border" onClick={handleLinkClick}><Link href="/#projects">Projects</Link></li>
                        <li className="py-2 border-b-0.5 border-border" onClick={handleLinkClick}><Link href="/#contact">Contact</Link></li>
                        <li className="py-2 border-b-0.5 border-border" onClick={handleLinkClick}><Link href="/blogs">Blogs</Link></li>
                    </ul>
                </nav>
            )}
        </header>
    );
}

export default Header;