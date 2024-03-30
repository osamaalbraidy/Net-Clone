'use client'

import { useCallback, useState, MouseEvent, useEffect } from "react"
import MobileMenu from "../MobileMenu/MobileMenu"
import NavbarItem from "../NavbarItem/NavbarItem"
import { BsChevronDown, BsSearch, BsBell } from "react-icons/bs"
import AccountMenu from "../AccountMenu/AccountMenu"
import Image from "next/image"

const TOP_OFFSET = 66;

const Navbar = () => {
    const [showMobileMenu, setShoMobileMenu] = useState(false);
    const [showAccountMenu, setShowAccountMenu] = useState(false);
    const [showBackground, setShowBackground] = useState(false);

    const toggleMobileMenu = useCallback((event: MouseEvent<HTMLDivElement>) => {
        event.preventDefault();
        setShoMobileMenu((prevState) => !prevState);
    }, []);

    const toggleAccountMenu = useCallback((event: MouseEvent<HTMLDivElement>) => {
        event.preventDefault();
        setShowAccountMenu((prevState) => !prevState);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= TOP_OFFSET) {
                setShowBackground(true);
            } else {
                setShowBackground(false);
            }
        }
        window.addEventListener('scroll', handleScroll)

        return () =>{
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <nav className={`w-full fixed z-40 `}>
            <div
                className={`
                px-4
                md-px-16
                py-6
                flex
                flex-row
                items-center
                transition
                duration-500
                ${showBackground ? 'bg-zinc-900 bg-opacity-90' : ''}
            `}
            >
                <Image src="/images/logo.png" width={100} height={26} alt="" className="h-4 lg:h-7" />
                <div
                    className="
                flex-row
                ml-8
                gap-7
                hidden
                lg:flex
                "
                >
                    <NavbarItem
                        label="Home"
                    />
                    <NavbarItem
                        label="Series"
                    />
                    <NavbarItem
                        label="Films"
                    />
                    <NavbarItem
                        label="New & Popular"
                    />
                    <NavbarItem
                        label="My List"
                    />
                    <NavbarItem
                        label="Browse by languages"
                    />
                </div>
                <div onClick={toggleMobileMenu} className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer">
                    <p className="text-white text-sm">
                        Browse
                    </p>
                    <BsChevronDown className={`text-white transition ${showMobileMenu ? 'transform rotate-180' : ''}`} />
                    <MobileMenu visible={showMobileMenu} />
                </div>
                <div className="flex flex-row ml-auto gap-7 items-center">
                    <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
                        <BsSearch />
                    </div>
                    <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
                        <BsBell />
                    </div>
                    <div onClick={toggleAccountMenu} className="flex flex-row items-center gap-2 cursor-pointer relative">
                        <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
                            <Image height={100} width={100} src="/images/default-blue.png" alt="" />
                        </div>
                        <BsChevronDown className={`text-white transition ${showAccountMenu ? 'transform rotate-180' : ''}`} />
                        <AccountMenu visible={showAccountMenu} />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
