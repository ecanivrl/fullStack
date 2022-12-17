import React from "react";
import Title from "../ui/Title";
import MenuItem from "./MenuItem";
import { useState } from "react";

const MenuWrappaer = ({ categoryList }) => {

    const [active, setActive] = useState(0)

    console.log(categoryList)
    return (
        <div className="container mx-auto mb-16">
            <div className="flex flex-col items-center  w-full">
                <Title className="text-[40px]">Our Menu</Title>
                <div className="mt-10 w-full gap-3 mx-auto flex justify-center items-center flex-wrap">
                    {categoryList && categoryList.map((category, index) => (
                        <button
                            onClick={() => setActive(index)}
                            key={category._id} className={`${index === active ? "btn-menu" : "hover:bg-secondary/25 px-6 py-2 rounded-3xl"}`}>
                            {category.title}</button>
                    ))}
                </div>
            </div>
            <div
                className="grid-cols-ese grid w-full justify-center gap-5 mt-8"
            //  className="mt-8 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 gap-y-10 mb-10"
            >
                <MenuItem />
                <MenuItem />
                <MenuItem />
            </div>
        </div>
    );
};

export default MenuWrappaer;
