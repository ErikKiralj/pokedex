import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { icons } from '../../assets'

import { MobileNavbarRoot, NavbarBurger, NavbarBurgerMenu, NavbarRoot } from './Navbar.styles'

export const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <NavbarRoot>
                <Link href="/">
                    <h2>Home</h2>
                </Link>
                <Link href="/library">
                    <h2>Library</h2>
                </Link>
                <Link href="/" id={'logo'}>
                    <Image src={icons.pokemon_logo} alt="pokemon_logo" height={60} />
                </Link>
                <Link href="/news">
                    <h2>News</h2>
                </Link>
                <Link href="/contact">
                    <h2>Contact</h2>
                </Link>
            </NavbarRoot>
            <MobileNavbarRoot>
                <NavbarBurger
                    isOpen={isOpen}
                    onClick={() => {
                        setIsOpen(!isOpen)
                    }}
                >
                    <div />
                    <div />
                    <div />
                </NavbarBurger>
                <NavbarBurgerMenu isOpen={isOpen}>
                    <Link href="/">
                        <h2>Home</h2>
                    </Link>
                    <Link href="/library">
                        <h2>Library</h2>
                    </Link>
                    <Link href="/news">
                        <h2>News</h2>
                    </Link>
                    <Link href="/contact">
                        <h2>Contact</h2>
                    </Link>
                </NavbarBurgerMenu>
            </MobileNavbarRoot>
        </>
    )
}
