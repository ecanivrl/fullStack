import Image from "next/image";
import React, { useEffect, useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import Title from "./Title";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import Input from "../../components/form/Input"
import { useRouter } from "next/router"
import MoonLoader from "react-spinners/MoonLoader";

const Search = ({ setIsSearchModal }) => {
    const [products, setProducts] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(
                    `${process.env.NEXT_PUBLIC_API_URL}/products`
                );
                setProducts(res.data);
                setFiltered(res.data.slice(0, 5));
            } catch (err) {
                console.log(err);
            }
        };
        setTimeout(() => {
            getProducts();
        }, 1000);
    }, []);

    const handleSearch = (e) => {
        const searchFilter = products
            .filter((product) =>
                product.title.toLowerCase().includes(e.target.value.toLowerCase())
            )
            .slice(0, 5);
        setFiltered(searchFilter);
    };


    return (
        <div className="w-full h-full bg-white/70 z-50 fixed flex justify-center items-center">
            <OutsideClickHandler onOutsideClick={() => setIsSearchModal(false)}>
                <div className="-mt-56 md:w-[600px] w-[370px]  bg-white rounded-3xl shadow-[1px_120px_230px_1px_rgb(55,164,145)] p-10 relative hover:border-secondary border ">
                    <Title className="text-center">Search</Title>

                    <Input
                        onChange={handleSearch}
                        placeholder="Search..."
                        className="!h-10 mb-2" />
                    <div>
                        {products.length > 0 ? (
                            <ul className="">
                                {filtered.length > 0 ?
                                    filtered.map((product) => (
                                        <li
                                            onClick={() => {
                                                router.push(`/product/${product?._id}`);
                                                setIsSearchModal(false)
                                            }}
                                            key={product._id} className="cursor-pointer flex justify-between items-center p-1 w-full px-5  hover:rounded-xl hover:bg-secondary transition-all">
                                            <div className="relative flex">
                                                <Image
                                                    src={product?.img}
                                                    alt={product?.title}
                                                    width={48}
                                                    height={48}
                                                />
                                            </div>
                                            <span className="font-bold">{product?.title}</span>
                                            <span className="font-bold">${product.prices[0]}</span>
                                        </li>
                                    )) : (<span className="mt-5 mx-auto w-full flex justify-center items-center text-primary font-bold">
                                        Aradıgınız anahtar kelimeye göre ürün bulunamadı..!
                                    </span>)}

                        </ul>
                        ) : (<div className="flex justify-center items-center w-full mt-10"> <MoonLoader color="#FCE700" />  </div>)}
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
