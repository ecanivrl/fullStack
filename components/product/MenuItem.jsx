import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const MenuItem = () => {
    return (
        <div className="relative px-3 sm:px-0">
            <div className=" rounded-2xl">
                <div className="bg-primary rounded-3xl relative ">
                    <div className="w-full  bg-ıtem h-[180px] grid place-content-center rounded-bl-[46px] rounded-tl-2xl rounded-tr-2xl">
                        <Link href={"/product"}>
                        <div className="relative w-36 h-36 hover:scale-110 transition-all">
                            <Image
                                src={"/images/pizza.png"}
                                alt=""
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        </Link>
                    </div>
                    <div className="p-[25px] text-ıtem">
                        <h4 className="text-xl font-semibold">Delicious Pizza</h4>
                        <p className="text-[15px]">
                            It is not possible to reduce digital transformation to a few
                            technologies, but the groundbreaking influence of web 2.0, mobile,
                            broadband internet, cloud computing, digital media, big data,
                            3D printers has started a new era.
                        </p>
                        <div className="flex justify-between items-center mt-4">
                            <span>$20</span>
                            <Link href={"/cart"}>
                                <button className="btn-primary !w-10 !h-10 !rounded-full !p-0 grid place-content-center">
                                <FaShoppingCart className=" hover:scale-125" size={20} />
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;

//
/* <div className="w-full h-[600px] absolute blur-[50px] bg-[rgb(55,164,145)] -z-40"></div> */
// shadow-[1px_120px_230px_1px_rgb(252,231,1)]
// shadow-[1px_120px_230px_1px_rgb(55,164,145)]
