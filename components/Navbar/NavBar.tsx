import React, { useState, useEffect } from "react"
import Image from "next/image";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import {
    ChevronDownIcon,
    PhoneIcon,
    PlayCircleIcon,
    MoonIcon,
    SunIcon,
} from '@heroicons/react/20/solid'
import { useSession, signIn, signOut } from "next-auth/react"
import { useShoppingCart } from "@/lib/context/shopping-cart";
import Link from "next/link"

function NavBar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [theme, setTheme] = useState("light")
    const { data: session } = useSession()
    const [totalProducts, setTotalProducts] = useState(0)
    const { cartProducts } = useShoppingCart()


    useEffect(() => {
        setTotalProducts(cartProducts);
    }, [cartProducts]);

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [theme])

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }


    const NAV_LINKS = [
        {
            label: "Home",
            href: "/"
        },
        {
            label: "Store",
            href: "/store"
        },
        {
            label: "Contact-us",
            href: "/contact"
        },
    ]


    return (
        <>
            <header className="bg-white dark:bg-black ">
                <nav className="flex items-center justify-between p-6 mx-auto shadow-md">
                    <div>
                        <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                    </div>
                    <div className="flex lg:hidden gap-3">
                        <div className="flex items-center gap-2">
                            <span aria-hidden="true" ><ShoppingBagIcon className="w-6 h-6" /></span>
                            <span className="w-6 h-6 bg-black rounded-full absolute top-6 right-24 flex items-center justify-center text-white">{totalProducts}</span>
                        </div>

                        <div>
                            {
                                theme === "dark" ? (
                                    <SunIcon className="w-6 h-6 text-white" onClick={handleThemeSwitch} />
                                ) : (

                                    <MoonIcon className="w-6 h-6" onClick={handleThemeSwitch} />
                                )
                            }
                        </div>
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>

                    </div>

                    <div className=" lg:flex items-center gap-3 hidden">
                        {
                            NAV_LINKS.map((link) => (
                                <a className="text-xl text-gray-900 font-bold dark:text-white" key={link.href} href={link.href}>
                                    {link.label}
                                </a>
                            ))
                        }
                    </div>
                    <div className="hidden lg:flex items-center  gap-3 text-gray-900 dark:text-white">
                        {
                            session?.user?.email ? (
                                <a onClick={() => signOut()} className="text-xl font-semibold leading-6">
                                    Log out <span aria-hidden="true">&rarr; </span>
                                </a>
                            ) : (

                                <a className="text-xl font-semibold leading-6" href="/login">
                                    Log in <span aria-hidden="true">&rarr; </span>
                                </a>
                            )
                        }
                        <Link passHref href="/cart">
                            <div className="flex items-center gap-2">
                                <span className="text-xl font-semibold leading-6">
                                    Cart
                                </span>
                                <span aria-hidden="true" ><ShoppingBagIcon className="w-6 h-6" /></span>
                                <span className="w-6 h-6 bg-black dark:bg-white dark:text-black rounded-full absolute top-3 right-12 flex items-center justify-center text-white">{totalProducts}</span>
                            </div>
                        </Link>
                        <div>
                            {
                                theme === "dark" ? (
                                    <SunIcon className="w-6 h-6 text-white" onClick={handleThemeSwitch} />
                                ) : (

                                    <MoonIcon className="w-6 h-6" onClick={handleThemeSwitch} />
                                )
                            }
                        </div>
                    </div>
                </nav>



                <Dialog as="div" className="lg:hidden fixed absolute " open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-10" />
                    <Dialog.Panel className="  fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between ">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img
                                    className="h-8 w-auto"
                                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                    alt=""
                                />
                            </a>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>

                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {
                                        NAV_LINKS.map((link) => (
                                            <a
                                                href={link.href}
                                                key={link.href}
                                                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                            >
                                                {link.label}
                                            </a>

                                        ))
                                    }

                                </div>
                                <div className="py-6">
                                    <a
                                        href="/login"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Log in
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>
        </>
    )
}
export default NavBar;