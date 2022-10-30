import Image from "next/image";
import React from "react";
import Title from "../../components/ui/Title";

const Index = () => {
    return (
        <div className="flex h-screen items-center  flex-wrap sm:py-20 py-0">
            <div className="relative md:flex-1 w-[60%] sm:h-[60%] h-[40%] mx-auto  ">
                <Image
                    priority
                    src={"/images/pizza.png"}
                    alt="detay"
                    layout="fill"
                    objectFit="contain"
                />
            </div>
            <div className="md:flex-1 md:text-start text-center mx-auto -mt-24">
                <Title className="text-6xl">Good Pizza</Title>
                <span className="text-secondary text-2xl font-bold underline underline-offset-2 inline-block my-4">
                    $10
                </span>
                <p className="text-sm my-4 md:pr-2 max-w-[600px] px-4 sm:px-0">
                    Let s leave the 2 paragraph long Lorem Ipsum example created as an
                    example here. Maybe you can solve other mysteries behind it. :)
                </p>
                <div>
                    <h4 className="text-xl font-bold mb-5">Choose the size</h4>
                    <div className="flex items-center gap-x-10 md:justify-start justify-center ">
                        <div className="relative w-8 h-8">
                            <Image src={"/images/size.png"} alt="size" layout="fill" objectFit="contain" />
                            <span className="spo -mt-4 ml-6 hover:bg-">small</span>
                            <div className="relative ">
                                <span className="absolute top-[1px]  right-[6px] h-2 w-2 origin-top-left -rotate-90 rounded-bl-[120px] bg-secondary" />
                            </div>
                        </div>
                        <div className="relative w-12 h-12">
                            <Image src={"/images/size.png"} alt="size" layout="fill" />
                            <span className="spo -mt-3 -mr-2">medium</span>
                            <div className="relative ">
                                <span className="absolute top-[4px]  right-[14px] h-2 w-2 origin-top-left -rotate-90 rounded-bl-[120px] bg-secondary" />
                            </div>
                        </div>
                        <div className="relative w-16 h-16">
                            <Image src={"/images/size.png"} alt="size" layout="fill" />
                            <span className="spo -mt-1">large</span>
                            <div className="relative ">
                                <span className="absolute top-3  right-[5px] h-2 w-2 origin-top-left -rotate-90 rounded-bl-[120px] bg-secondary" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-x-4 my-6 md:justify-start justify-center">
                    <label className="flex items-center gap-x-1">
                        <input type={"checkbox"} className="w-3 h-3 accent-secondary" />
                        <span className="text-sm font-semibold">Ketçap</span>
                    </label>
                    <label className="flex items-center gap-x-1">
                        <input type={"checkbox"} className="w-3 h-3 accent-secondary" />
                        <span className="text-sm font-semibold">Peynir</span>
                    </label>
                    <label className="flex items-center gap-x-1">
                        <input type={"checkbox"} className="w-3 h-3 accent-secondary" />
                        <span className="text-sm font-semibold">Kaşar</span>
                    </label>
                </div>
                <button className="btn-primary ">Add to Cart</button>
            </div>
        </div>
    );
};

export default Index;
