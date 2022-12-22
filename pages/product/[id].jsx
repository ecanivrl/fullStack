import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Title from "../../components/ui/Title";
import { GiShoppingCart } from "react-icons/gi"
import { GiDirectionSigns } from "react-icons/gi"
import { addProduct } from "../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";

const Index = ({ food }) => {

    const [prices, setPrices] = useState(food?.prices);
    const [price, setPrice] = useState(prices[0]);
    const [size, setSize] = useState(0);
    const [extraItems, setExtraItems] = useState(food?.extraOptions);
    const [extras, setExtras] = useState([]);
    const dispatch = useDispatch()

    const cart = useSelector((state) => state.cart)

    const handleSize = (sizeIndex) => {
        const difference = prices[sizeIndex] - prices[size];
        setSize(sizeIndex);
        toast.success(`${difference} $ eklendi`)
        changePrice(difference);
    };

    const changePrice = (number) => {
        setPrice(price + number);
    };

    const handleChange = (e, item) => {
        const checked = e.target.checked;

        if (checked) {
            changePrice(item.price);
            setExtras([...extras, item]);
            toast.success(`${item.text} eklendi`)
        } else {
            changePrice(-item.price);
            setExtras(extras.filter((extra) => extra.id !== item.id));
        }
    };

    const handleClick = () => {
        dispatch(addProduct({ ...food, extras, price, quantity: 1 }))
        toast.success(`${food.title} sepete eklendi`)
    }

    return (
        <div className="flex h-screen items-center  flex-wrap px-2 sm:px-0 mb-40 md:mb-0 relative">
            <div className="relative md:flex-1 w-[60%] sm:h-[60%] h-[40%] mx-auto">
                <Image
                    priority
                    src={food?.img}
                    alt="detay"
                    layout="fill"
                    objectFit="contain"
                />
            </div>
            <div className="md:flex-1 md:text-start text-center mx-auto -mt-24">
                <Title className="text-6xl mt-16 md:mt-0">{food?.title}</Title>
                <span className="text-secondary text-2xl font-bold underline underline-offset-2 inline-block my-4">
                    ${price}
                </span>
                <p className="text-sm my-4 md:pr-2 max-w-[600px] px-4 sm:px-0">
                    {food?.desc}
                </p>
                <div>
                    <h4 className="text-xl font-bold mb-5">Choose the size</h4>
                    {food.category === "pizza" && (
                        <div className="flex items-center gap-x-10 md:justify-start justify-around ">
                            <div
                                className="relative w-8 h-8 cursor-pointer"
                                onClick={() => handleSize(0)}
                            >
                                <Image
                                    src={"/images/size.png"}
                                    alt="size"
                                    layout="fill"
                                    objectFit="contain"
                                />
                                <span className="spo -mt-4 ml-6 hover:bg-">small</span>
                                <div className="relative ">
                                    <span className="absolute top-[1px]  right-[6px] h-2 w-2 origin-top-left -rotate-90 rounded-bl-[120px] bg-secondary" />
                                </div>
                            </div>
                            <div
                                className="relative w-12 h-12 cursor-pointer"
                                onClick={() => handleSize(1)}
                            >
                                <Image src={"/images/size.png"} alt="size" layout="fill" />
                                <span className="spo -mt-3 -mr-2">medium</span>
                                <div className="relative ">
                                    <span className="absolute top-[4px]  right-[14px] h-2 w-2 origin-top-left -rotate-90 rounded-bl-[120px] bg-secondary" />
                                </div>
                            </div>
                            <div
                                className="relative w-16 h-16 cursor-pointer"
                                onClick={() => handleSize(2)}
                            >
                                <Image src={"/images/size.png"} alt="size" layout="fill" />
                                <span className="spo -mt-1">large</span>
                                <div className="relative ">
                                    <span className="absolute top-3  right-[5px] h-2 w-2 origin-top-left -rotate-90 rounded-bl-[120px] bg-secondary" />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="flex gap-x-4 my-6 md:justify-start justify-around">
                    {extraItems.map((item) => (
                        <label className="flex items-center gap-x-1" key={item.id}>
                            <input
                                type="checkbox"
                                className="w-5 h-5 accent-secondary"
                                onChange={(e) => handleChange(e, item)}
                            />
                            <span className="text-sm font-semibold">{item.text}</span>
                        </label>
                    ))}
                </div>
                <div className="w-full flex justify-center md:justify-start mt-10 items-center" onClick={handleClick}>
                    <button className="btn-primary flex gap-x-2"> <span>Add to Cart</span>
                        <GiShoppingCart size={25} /> </button>
                </div>
            </div>
            <Link href={"/menu"}>
                <div className="cursor-pointer absolute md:bottom-24 -bottom-[156px] right-7 pb-3 flex items-center gap-x-2 border-b-4 border-primary">
                    <GiDirectionSigns size={30} className="text-primary" />
                    <span className="text-sm text-secondary">Menü sayfasına geri git</span>
                </div>
            </Link>
        </div>
    );
};


export const getServerSideProps = async ({ params }) => {
    const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/products/${params.id}`
    );

    return {
        props: {
            food: res.data ? res.data : null,
        },
    };
};

export default Index;
