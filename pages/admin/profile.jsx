import Image from "next/image";
import React, { useState } from "react";
import { MdElectricBike } from "react-icons/md";
import { RiRestaurantLine } from "react-icons/ri"
import Products from "../../components/admin/Products";
import { TbDots } from "react-icons/tb"
import { SiReacttable } from "react-icons/si"
import Order from "../../components/admin/Order";
import Catogory from "../../components/admin/Catogory";
import Footer from "../../components/admin/Footer";
import axios from "axios";
import { useRouter } from "next/router"
import { toast } from "react-toastify";
import AddProduct from "../../components/admin/AddProduct";
import { IoIosAdd } from "react-icons/io"

// Admin Profile

const Profile = () => {
    const [tabs, setTabs] = useState(0);
    const [isProductModal, setIsProductModal] = useState(false)
    const { push } = useRouter();

    const closeAdminAccount = async () => {
        try {
            if (confirm("Are you sure you want to close your Admin Account?")) {
                const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/admin`);
                if (res.status === 200) {
                    toast.success("Admin Hesabından Çıkış yapılıyor!");
                    setTimeout(() => {
                    push("/admin");
                    }, 2000)
                }
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="flex justify-center items-center mb-20 md:mb-0 mt-10">
            <div className="flex px-10 min-h-[calc(100vh_-_233px)] flex-col md:flex-row mt-20 gap-10 w-full">
                <div className="md:w-80 w-full flex-shrink-0  mx-auto">
                    <div className="
                    relative flex flex-col items-center px-10 py-5 border border-secondary
                    border-b-0  ">
                        <Image
                            src="/images/admin.png"
                            alt="cat"
                            width={100}
                            height={100}
                            className="rounded-full"
                        />
                        <b className="text-2xl mt-1 font-medium">Econ</b>
                    </div>
                    <ul className="text-center">
                        <li
                            onClick={() => setTabs(0)}
                            className={`border border-secondary gap- w-full p-3 cursor-pointer flex justify-center items-center
                         transition-all duration-500 ease-in ${tabs === 0 && "bg-secondary text-white"
                                }`}
                        >
                            <RiRestaurantLine className="w-5 h-5" />

                            <button className="ml-3">Products</button>
                        </li>
                        <li
                            onClick={() => setTabs(1)}
                            className={`border border-secondary gap- w-full p-3 cursor-pointer
                         transition-all duration-500 ease-in ${tabs === 1 && "bg-secondary text-white"
                                }`}
                        >
                            <button>
                                {" "}
                                <MdElectricBike className="w-5 h-5" />
                            </button>
                            <button className="ml-5">Orders</button>
                        </li>
                        <li
                            onClick={() => setTabs(2)}
                            className={`border border-secondary gap- w-full p-3 cursor-pointer flex justify-center items-center
                         transition-all duration-500 ease-in ${tabs === 2 && "bg-secondary text-white"
                                }`}
                        >
                            <span className="mt-2"><TbDots className="w-5 h-5" /></span>
                            <button>Categories</button>
                        </li>
                        <li
                            onClick={() => setTabs(3)}
                            className={`border border-secondary gap- w-full p-3 cursor-pointer flex justify-center items-center
                         transition-all duration-500 ease-in ${tabs === 3 && "bg-secondary text-white"
                                }`}
                        >
                            <button>
                                {" "}
                                <SiReacttable />
                            </button>
                            <button className="ml-1">Footer</button>
                        </li>
                        <li
                            onClick={closeAdminAccount}
                            className={`border border-secondary gap- w-full p-3 cursor-pointer
                         transition-all duration-500 ease-in ${tabs === 4 && "bg-secondary text-white"
                                }`}
                        >
                            <i className="fa fa-sign-in"></i>
                            <button className="ml-1">Exit</button>
                        </li>
                    </ul>
                </div>
                {tabs === 2 && (<Catogory />)}
                {tabs === 0 && (<Products />)}
                {tabs === 1 && (<Order />)}
                {tabs === 3 && (<Footer />)}
                {isProductModal && <AddProduct setIsProductModal={setIsProductModal} />}
                <button className="bg-secondary rounded-full p-2 text-white flex items-center 
                absolute top-28 right-5 " onClick={() => setIsProductModal(true)}>Add
                    <IoIosAdd className='w-6 h-6' />
                </button>
            </div>
        </div>

    );
};

export const getServerSideProps = (ctx) => {
    const myCookie = ctx.req?.cookies || "";
    if (myCookie.token !== process.env.ADMIN_TOKEN) {
        return {
            redirect: {
                destination: "/admin",
                permanent: false,
            },
        };
    }

    return {
        props: {},
    };
};

export default Profile;
