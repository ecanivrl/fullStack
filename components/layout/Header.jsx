import React, { useState } from "react";
import Logo from "../ui/Logo";
import Search from "../ui/Search";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImSearch } from "react-icons/im";
import { AiOutlineClose } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs"
import { useRouter } from "next/router";
import Link from "next/link";
import { useSelector } from "react-redux";
import { GiShoppingCart } from "react-icons/gi"

const Header = () => {
    const [isSearchModal, setIsSearchModal] = useState(false);
    const [isMenuModal, setIsMenuModal] = useState(false);

    const cart = useSelector((state) => state.cart)

    const router = useRouter();

    return (
        <div
            className={`h-[5.5rem] z-50 relative ${router.asPath === "/" ? "bg-transparent" : "bg-primary"
                } `}
        >
            <div className="container  mx-auto text-white flex justify-between items-center h-full ">
                <span className="cursor-pointer"><Logo /></span>
                <nav
                    className={`sm:static absolute top-0 left-0 sm:w-auto sm:h-auto w-full h-screen sm:text-white text-black  sm:bg-transparent bg-white sm:flex hidden ${isMenuModal === true && "!grid place-content-center"
                        }`}
                >
                    <ul className="flex gap-x-2 sm:flex-row flex-col items-center">
                        <li className={`px-[5px] py-[10px] uppercase hover:text-secondary cursor-pointer
                        ${router.asPath === "/" ? "text-secondary" : ""}`}>
                            <Link href="/">Home</Link>
                        </li>
                        <li className={`px-[5px] py-[10px] uppercase hover:text-secondary cursor-pointer
                        ${router.asPath === "/menu" ? "text-secondary" : ""}`}>
                            <Link href="/menu">Menu</Link>
                        </li>
                        <li className={`px-[5px] py-[10px] uppercase hover:text-secondary cursor-pointer
                        ${router.asPath === "/about" ? "text-secondary" : ""}`}>
                            <Link href="/about">About</Link>
                        </li>
                        <li className={`px-[5px] py-[10px] uppercase hover:text-secondary cursor-pointer
                        ${router.asPath === "/reservation" ? "text-secondary" : ""}`}>
                            <Link href="/reservation">Book Table</Link>
                        </li>
                    </ul>
                </nav>
                <div className="flex gap-x-4 items-center">
                    <Link href="/auth/login">
                        <span className="cursor-pointer flex flex-col justify-center items-center gap-y-1">
                            <FaUser className="lix" />
                            {/* {router.asPath === "/" ? (
                                <i className="text-xs font-thin">Login</i>
                            ) : ("")} */}

                        </span>
                    </Link>
                    <Link href="/cart">
                        <span className="relative">  <GiShoppingCart size={25} className={`lix hover:translate-x-2 duration-1000 transition-all
                         ${router.asPath === "/cart" ? "text-secondary" : ""}`} />
                            {cart.products.length > 0 ? (
                                <span className="w-4 h-4 text-xs grid place-content-center rounded-full
                                bg-secondary absolute -top-3 -right-2 text-black font-semibold">{cart.products.length}</span>
                            ) :
                                <span className="w-4 h-4 text-xs grid place-content-center rounded-full
                            bg-secondary absolute -top-3 -right-2 text-black font-semibold">0</span>
                            }
                        </span>
                    </Link>
                    <button onClick={() => setIsSearchModal(true)}>
                        {" "}
                        <ImSearch className="lix" />{" "}
                    </button>
                    <a href="#" className="md:inline-block hidden">
                        {" "}
                        <button className="btn-primary">Order Online</button>{" "}
                    </a>
                    <button
                        onClick={() => setIsMenuModal(true)}
                        className="sm:hidden inline-block"
                    >
                        {" "}
                        <GiHamburgerMenu className="hover:text-secondary transition-all duration-500" />{" "}
                    </button>
                    {isMenuModal && (
                        <button
                            className="absolute top-5 right-5"
                            onClick={() => setIsMenuModal(false)}
                        >
                            <AiOutlineClose className="text-black lix w-6 h-6" />
                        </button>
                    )}
                </div>
            </div>
            {isSearchModal && <Search setIsSearchModal={setIsSearchModal} />}
        </div>
    );
};

export default Header;
