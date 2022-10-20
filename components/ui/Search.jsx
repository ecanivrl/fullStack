import Image from "next/image";
import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import Title from "./Title";
import { AiOutlineClose } from "react-icons/ai";

const Search = ({ setIsSearchModal }) => {
    return (
        <div className="w-full h-full bg-white/90 z-40 fixed flex justify-center items-center">
            <OutsideClickHandler onOutsideClick={() => setIsSearchModal(false)}>
                <div className="md:w-[600px] w-[370px]  bg-white rounded-3xl shadow-[1px_120px_230px_1px_rgb(55,164,145)] p-10 relative hover:border-secondary border">
                    <Title className="text-center">Search</Title>
                    <input
                        type={"text"}
                        placeholder="Search..."
                        className="w-full border border-secondary outline-none p-2.5 rounded-md my-2"
                    />
                    <div>
                        <ul className="">
                            <li className="flex justify-between items-center p-1 mx-5 hover:bg-secondary transition-all">
                                <div className="relative flex">
                                    <Image
                                        src={"/images/pizza.png"}
                                        alt="pizza"
                                        width={48}
                                        height={48}
                                    />
                                </div>
                                <span className="font-bold">Good Pizza</span>
                                <span className="font-bold">$10</span>
                            </li>
                            <li className="flex justify-between items-center p-1 hover:bg-secondary transition-all">
                                <div className="relative flex">
                                    <Image
                                        src={"/images/pizza.png"}
                                        alt="pizza"
                                        width={48}
                                        height={48}
                                    />
                                </div>
                                <span className="font-bold">Good Pizza</span>
                                <span className="font-bold">$10</span>
                            </li>
                            <li className="flex justify-between items-center p-1 hover:bg-secondary transition-all">
                                <div className="relative flex">
                                    <Image
                                        src={"/images/pizza.png"}
                                        alt="pizza"
                                        width={48}
                                        height={48}
                                    />
                                </div>
                                <span className="font-bold">Good Pizza</span>
                                <span className="font-bold">$10</span>
                            </li>
                        </ul>
                        <button
                            className="absolute top-5 right-5"
                            onClick={() => setIsSearchModal(false)}
                        >
                            <AiOutlineClose className="lix w-6 h-6" />
                        </button>
                    </div>
                </div>
            </OutsideClickHandler>
        </div>
    );
};

export default Search;
