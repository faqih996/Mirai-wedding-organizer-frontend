"use client"

import React from 'react'
import Logo from '@/assets/images/logo-samawa.svg'
import { usePathname } from 'next/navigation';
import Link from 'next/link';

type Props = {}

function Header({ }: Props) {
    
    // Get the current path using the usePathname hook
    const pathname = usePathname()

    // Define the main menu items with their labels and slugs
    const mainMenus = [
        {
            key: "homepage",
            label: "Home",
            slug: "/",
        },
        {
            key: "category",
            label: "Category",
            slug: "/categories",
        },
        {
            key: "packages",
            label: "Packages",
            slug: "/packages",
        },
        {
            key: "testimonials",
            label: "Testimonials",
            slug: "/testimonials",
        },
    ]

    // Render the header with the main menu items and the current path
    return (
        <header className="container flex items-center justify-between pt-8 mx-auto -mb-8">
            <span className="flex items-center gap-x-3">
                <span className="text-color2">
                    
                    <Logo />

                </span>
                <span className="text-2xl font-bold cursor-default">Samawa</span>
            </span>
            
            <ul className="flex gap-x-10">
                {/* loop through the main menu items and check if the current path matches the menu's slug */}
                {mainMenus.map((menu) => {
                    // check if the menu item has a slug and if the current path starts with the menu's slug or is equal to it
                    let isActive = false;
                    // if the menu item has a slug, check if the current path starts with the menu's slug or is equal to it
                    if (!!menu.slug) {
                        // check if the current path starts with the menu's slug or is equal to it
                        if (
                            // if the current path starts with the menu's slug or is equal to it then the current path is equal to the menu
                            pathname === menu.slug || 
                            (pathname.startsWith(menu.slug) && pathname.charAt(menu.slug.length) === "/")
                        ) {
                            isActive = true;
                        }
                    }

                    return (
                        // give the menu a tittle point to show the menu items
                        <li key={menu.key}>
                            {/* check if the current path is equal to the menu's slug */}
                            <Link
                                href={menu.slug}
                                className={["hover:underline", isActive ? "font-bold text-color2" : ""].join(" ")}
                                aria-current={isActive ? "true":"false"}
                            >
                                {/* display the menu label */}
                                {menu.label}
                            </Link>
                        </li>
                    );
                })}
            </ul>

            <ul className="flex gap-x-4">
                <li>
                    <Link
                    href="/contacts"
                    className="px-5 py-3 font-semibold border rounded-full border-dark1"
                    >Contact Us</Link>
                </li>
                <li>
                    <Link
                    href="/bookings"
                    className="px-5 py-3 font-semibold border rounded-full transparent bg-color2 text-light1"
                    >My Bookings</Link>
                </li>
            </ul>
        </header>
    )
}

export default Header