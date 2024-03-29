'use client'
import React from 'react'
import NavbarItem from '../NavbarItem/NavbarItem';

interface MobileMenuProps {
    visible?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
    if (!visible) {
        return null
    }

    return (
        <div className='bg-black w-56 absolute top-14 left-26 py-5 flex-col border-gray-800 flex'>
            <div className='flex flex-col gap-4'>
                <div className='px-3 text-center text-white flex flex-col gap-2'>
                    <NavbarItem
                        label="Home"
                        className='hover:underline'
                        />
                    <NavbarItem
                        label="Series"
                        className='hover:underline'
                        />
                    <NavbarItem
                        label="Films"
                        className='hover:underline'
                    />
                    <NavbarItem
                        label="New & Popular"
                        className='hover:underline'
                    />
                    <NavbarItem
                        label="My List"
                        className='hover:underline'
                    />
                    <NavbarItem
                        label="Browse by languages"
                        className='hover:underline'
                    />
                </div>
            </div>
        </div>
    )
}

export default MobileMenu
