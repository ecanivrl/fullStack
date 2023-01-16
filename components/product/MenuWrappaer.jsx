import React from "react";
import Title from "../ui/Title";
import MenuItem from "./MenuItem";
import { useState, useEffect } from "react";

const MenuWrappaer = ({ categoryList, productList }) => {
    // console.log(categoryList)
    // console.log(productList)
    const [active, setActive] = useState(0)
    const [filter, setFilter] = useState([]);
    const [productlLimit, setProductLimit] = useState(3)


    useEffect(() => {
        setFilter(
            productList.filter(
                (product) =>
                    product.category === categoryList[active].title.toLowerCase()
            )
        );
    }, [categoryList, productList, active]);

    return (
        <div className="container mx-auto mb-16">
            <div className="flex flex-col items-center  w-full">
                <Title className="text-[40px]">Our Menu</Title>
                <div className="mt-10 w-full gap-3 mx-auto flex justify-center items-center flex-wrap">
                    {categoryList && categoryList.map((category, index) => (
                        <button
                            onClick={() => { setActive(index); setProductLimit(3) }}
                            key={index} className={`${index === active ? "btn-menu" : "hover:bg-secondary/25 px-6 py-2 rounded-3xl"}`}>
                            {category.title}</button>
                    ))}
                </div>
            </div>
            <div className="grid-cols-ese grid w-full justify-center gap-5 mt-8 min-h-[460px]">
                {filter.length > 0 &&
                    filter.slice(0, productlLimit).map((product) => (
                        <MenuItem key={product._id} product={product} />
                    ))}
            </div>
            {filter.length > 3 && productlLimit < filter.length && (
                <div className="w-full flex justify-center items-center">
                <button
                    onClick={() => setProductLimit(productlLimit + 3)}
                    className="btn-primary">Wiev More</button>
            </div>
            )}
        </div>
    );
};



export default MenuWrappaer;
