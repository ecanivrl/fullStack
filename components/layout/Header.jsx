import React, { useState } from "react";
import Logo from "../ui/Logo";
import Search from "../ui/Search";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImSearch } from "react-icons/im";
import { AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/router";
import Link from "next/link";

const Header = () => {
    const [isSearchModal, setIsSearchModal] = useState(false);
    const [isMenuModal, setIsMenuModal] = useState(false);

    const router = useRouter();

    return (
        <div
            className={`h-[5.5rem] z-50 relative ${router.asPath === "/" ? "bg-transparent" : "bg-primary"
                } `}
        >
            <div className="container mx-auto text-white flex justify-between items-center h-full ">
                <Logo />
                <nav
                    className={`sm:static absolute top-0 left-0 sm:w-auto sm:h-auto w-full h-screen sm:text-white text-black  sm:bg-transparent bg-white sm:flex hidden ${isMenuModal === true && "!grid place-content-center"
                        }`}
                >
                    <ul className="flex gap-x-2 sm:flex-row flex-col items-center">
                        <li className="px-[5px] py-[10px] uppercase hover:text-secondary cursor-pointer">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="px-[5px] py-[10px] uppercase hover:text-secondary cursor-pointer">
                            <Link href="/menu">Menu</Link>
                        </li>
                        <li className="px-[5px] py-[10px] uppercase hover:text-secondary cursor-pointer">
                            <Link href="/about">About</Link>
                        </li>
                        <li className="px-[5px] py-[10px] uppercase hover:text-secondary cursor-pointer">
                            <Link href="/reservation">Book Table</Link>
                        </li>
                    </ul>
                </nav>
                <div className="flex gap-x-4 items-center">
                    <a href="#">
                        {" "}
                        <FaUser className="lix" />{" "}
                    </a>
                    <a href="#">
                        {" "}
                        <FaShoppingCart className="lix" />{" "}
                    </a>
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
