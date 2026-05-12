"use client"
import { Button } from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { HiMenuAlt2 } from "react-icons/hi";

const Navbar = () => {

    const [menu, setMenu] = useState(false);

    const navLinks = [
        {
            id: 1,
            name: "Home",
            path: "/"
        },
        {
            id: 2,
            name: "Destinations",
            path: "/destinations"
        },
        {
            id: 3,
            name: "My Bookings",
            path: "/my-bookings"
        },
        {
            id: 4,
            name: "Add Destination",
            path: "/add-destination"
        }
    ];
    const links = navLinks.map(link =>
        <li key={link.id}><Link href={link.path}>{link.name}</Link></li>)


    return (
        <div className="shadow">
            <nav className="flex justify-between items-center
         py-4 container mx-auto px-4 md:px-8 lg:px-12 flex-wrap">
                <ul className="hidden md:flex justify-between items-center gap-4">
                    {links}
                </ul>



                <div className="flex items-center gap-3">
                    {/* mobile responsive */}
                    <div className="relative md:hidden">
                        {
                            menu ?
                                <Button size="sm"
                                    onClick={() => { setMenu(!menu) }}
                                    isIconOnly variant="tertiary">
                                    <CgClose className="size-5" />
                                </Button>

                                : <Button size="sm" onClick={() => { setMenu(!menu) }}
                                    isIconOnly variant="tertiary">
                                    <HiMenuAlt2 className="size-5" />
                                </Button>
                        }

                        {menu &&
                            <ul className="absolute top-13 bg-slate-100 z-10 p-4 w-40 space-y-1 ">
                                {links}
                            </ul>
                        }

                    </div>
                    <h1 className=" text-2xl md:text-3xl font-bold text-[#15A1BF] ">Wanderlust</h1>
                </div>

                <ul className="flex justify-between items-center gap-4">
                    <li>
                        <Link href={'/profile'}>Profile</Link>
                    </li>
                    <li>
                        <Link href={'/login'}>Login</Link>
                    </li>
                    <li>
                        <Link href={'/signup'}>Sign Up</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;