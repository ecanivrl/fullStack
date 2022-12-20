import Image from "next/image";
import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import Title from "../ui/Title";
import { GiCancel } from "react-icons/gi";
import Input from "../form/Input";
import { IoIosAdd } from "react-icons/io"


const AddProduct = ({ setIsProductModal }) => {
    return (
        <div className="fixed -top-1 left-0 w-screen h-screen z-50 after:content-[''] after:w-screen after:h-screen after:bg-[#f3f3f3] after:absolute after:top-0 after:left-0 after:opacity-90 grid place-content-center">
            <OutsideClickHandler onOutsideClick={() => setIsProductModal(false)}>

                <div className="w-full h-full grid place-content-center relative">
                    <div className="relative z-50 md:w-[600px] w-[370px] bg-white max-h-[670px] border-2 p-10 rounded-3xl">
                        <Title className="md:text-[40px] text-[30px] text-center -mt-5">Add a New Product</Title>

                        <div className="flex flex-col text-sm mt-2">
                            <span className="font-semibold mb-1">Choose an image</span>
                            <Input type="file" className="!h-11" />
                        </div>
                        <div className="flex flex-col text-sm mt-2">
                            <span className="font-semibold mb-[2px]">Title</span>
                            <Input
                                type="text"
                                className="!h-10"
                                placeholder="Write a title..."
                            />
                        </div>
                        <div className="flex flex-col text-sm mt-4">
                            <span className="font-semibold mb-[2px]">Description</span>
                            <textarea
                                className="h-10 focus:bg-white border-secondary caret-secondary bg-white  w-full border  px-4 peer pt-3"
                                placeholder="Write a title..."
                            />
                        </div>

                        <div className="flex flex-col text-sm mt-4">
                            <span className="font-semibold mb-[2px]">Select Category</span>
                            <select
                                className="border border-secondary p-1 text-sm px-1 outline-none"
                                placeholder="Write a title..."
                            >
                                <option value="1">Category 1</option>
                                <option value="1">Category 2</option>
                                <option value="1">Category 3</option>
                                <option value="1">Category 4</option>
                            </select>
                        </div>

                        <div className="flex flex-col text-sm mt-4 w-full">
                            <span className="font-semibold mb-[2px]">Prices</span>
                            <div className="flex justify-between gap-6 w-full md:flex-nowrap flex-wrap  h-[75px] items-center
                            custom-vertical-scrollbar overflow-y-auto overflow-x-hidden">
                                <Input
                                    type="number"
                                    className="!h-10"
                                    placeholder="small"
                                />
                                <Input
                                    type="number"
                                    className="!h-10"
                                    placeholder="medium"
                                />
                                <Input
                                    type="number"
                                    className="!h-10"
                                    placeholder="large"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col text-sm mt-2 w-full py-2">
                            <span className="font-semibold mb-[2px]">Extra</span>
                            <div className="flex  gap-6 w-full md:flex-nowrap flex-wrap">
                                <input
                                    type="text"
                                    className="border-b-2 border-secondary p-1 pl-0 text-sm px-1 outline-none w-36"
                                    placeholder="item"
                                />
                                <div className="mt-1">
                                    <span className="inline-block border md:ml-0 ml-16 border-orange-500 text-orange-500  p-1 rounded-xl text-xs">
                                        ketçap
                                    </span>
                                </div>
                                <input
                                    type="number"
                                    className="border-b-2 border-secondary p-1 pl-0 text-sm px-1 outline-none w-36"
                                    placeholder="price"
                                />
                                <button className="bg-secondary rounded-lg p-2 text-white flex items-center 
                ml-auto" onClick={() => setIsProductModal(true)}>Add
                                    <IoIosAdd className='w-5 h-5' />
                                </button>
                            </div>

                        </div>
                        <div className="flex md:mt-5 mt-2">
                            <button className="w-full rounded-xl p-1.5 !bg-success ">Create</button>
                        </div>
                        <button
                            className="absolute  top-4 right-4"
                            onClick={() => setIsProductModal(false)}
                        >
                            <GiCancel size={25} className=" transition-all" />
                        </button>
                    </div>
                </div>
            </OutsideClickHandler>
        </div>
    );
};

export default AddProduct;