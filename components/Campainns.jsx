import Image from "next/image";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import Title from "./ui/Title";

const CampainItem = () => {
    return (
        <div className="bg-primary flex-1 rounded-md py-5 px-[5px] flex items-center gap-x-8">
            <div className='relative md:w-[170px] md:h-[170px] w-36 h-36 after:content-[""] border-[5px] border-secondary rounded-full overflow-hidden'>
                <Image
                    src={"/images/acıkhamburger.jpg"}
                    alt="pizza"
                    layout="fill"
                    objectFit="cover"
                    className="hover:scale-105 transition-all"
                />
            </div>
            <div className="text-white">
                <Title className="text-[23px] sm:text-5xl">Tasty Thursdays</Title>
                <div className="font-dancing my-2">
                    <span className="sm:text-2xl text-base">20%</span>
                    <span className="text-sm inline-block ml-1">off</span>
                </div>
                <button className="bg-secondary px-2.5 py-2 rounded-full flex items-center gap-x-2 hover:text-primary">
                    Order Now <FaShoppingCart className=" hover:-rotate-45" size={20} />
                </button>
            </div>
        </div>
    );
};

const Campainns = () => {
    return (
        <div className="flex justify-between container mx-auto py-20 gap-6 flex-wrap">
            <CampainItem />
            <CampainItem />
        </div>
    );
};

export default Campainns;
