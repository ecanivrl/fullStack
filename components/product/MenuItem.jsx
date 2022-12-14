import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GiShoppingCart } from "react-icons/gi"
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";
import { toast } from "react-toastify";

const MenuItem = ({ product }) => {

    const cart = useSelector((state) => state.cart);
    const findCart = cart.products.find((item) => item._id === product._id);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(
            addProduct({
                ...product,
                extras: [{ text: "Eksta secilmedi" }],
                price: product.prices[0],
                quantity: 1,
            })
        );
        toast.success(`${product.title} sepete eklendi`, {
            autoClose: 1200
        })
    };

    return (
        <div className="relative px-3 sm:px-0">
            <div className=" rounded-2xl">
                <div className="bg-primary rounded-3xl relative ">
                    <div className="w-full  bg-ıtem h-[180px] grid place-content-center rounded-bl-[46px] rounded-tl-2xl rounded-tr-2xl">
                        <Link href={`/product/${product._id}`}>
                            <div className="relative w-40 h-40 hover:scale-110 transition-all">
                            <Image
                                    src={product.img}
                                alt=""
                                layout="fill"
                                    objectFit="contain"
                                    className="rounded-full"
                                    priority
                            />
                        </div>
                        </Link>
                    </div>
                    <div className="p-[25px] text-ıtem min-h-[225px]">
                        <h4 className="text-xl font-semibold">{product.title}</h4>
                        <p className="text-[15px]">
                            {product.desc}
                        </p>
                        <div className="flex justify-between items-center mt-4">
                            <span>${product.prices[0]}</span>
                            <button
                                disabled={findCart}
                                onClick={handleClick}
                                className="btn-primary !bg-secondary hover:!bg-white !w-10 !h-10 !rounded-full !p-0 grid place-content-center">
                                <GiShoppingCart className=" hover:scale-150 duration-500 text-primary " size={20} />
                            </button>
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
