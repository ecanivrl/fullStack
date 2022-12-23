import React, { useEffect, useState } from "react";
import Title from "../ui/Title";
import { useRouter } from "next/router";
import axios from "axios";

const Footer = () => {
    const router = useRouter()

    const [footer, setFooter] = useState([])

    useEffect(() => {
        const getFooter = async () => {
            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/footer`)
                setFooter(res.data[0])
            } catch (err) {
                console.log(err)
            }
        }
        getFooter()
    }, [])
    return (
        <div className="bg-primary text-white pb-20">
            <div className={`${router.asPath === "/cart" ? "py-6" : "container mx-auto pt-16 pb-6"}
                             `}>
                <div className="flex md:justify-between justify-center text-center flex-wrap md:gap-y-0 gap-y-6 ">
                    <div className="md:flex-1">
                        <Title addClass="text-[30px]">Contact Us</Title>
                        <div className="flex flex-col gap-y-2 mt-3">
                            <div className="hover:text-secondary transition-all duration-1000">
                                <a href={footer?.location} target="_blank" rel="noreferrer">
                                <i className="fa fa-map-marker"></i>
                                    <span className="inline-block ml-2 font-extralight">Location</span>
                                </a>
                            </div>
                            <div className="hover:text-secondary transition-all duration-1000">
                                <a href={`tel:${footer?.phoneNumber}`}>
                                <i className="fa fa-phone"></i>
                                    <span className="inline-block ml-2 font-thin">Call +90 {footer?.phoneNumber}</span>
                                </a>
                            </div>
                            <div className="hover:text-secondary transition-all duration-1000">
                                <a href={`mailto:${footer?.email}`}>
                                <i className="fa fa-envelope"></i>
                                    <span className="inline-block ml-2 font-thin">{footer?.email}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="md:flex-1">
                        <Title addClass="text-[38px]">Feane</Title>
                        <p className="mt-3 hover:text-secondary transition-all duration-1000 font-extralight">
                            {footer?.desc}
                        </p>
                        <div className="flex items-center justify-center mt-5 gap-x-2 ">
                            {footer?.socialMedia?.map((item) => (
                                <a
                                    key={item?._id}
                                    href={item?.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-8 h-8 grid place-content-center bg-white text-primary rounded-full hover:scale-125"
                            >
                                    <i className={item.icon}></i>
                            </a>
                            ))}
                        </div>
                    </div>
                    <div className="md:flex-1">
                        <Title addClass="text-[30px]">Opening Hours</Title>
                        <div className="flex flex-col gap-y-2 mt-3">
                            <div className="hover:text-secondary transition-all duration-1000">
                                <span className="inline-block ml-2 font-extralight">{footer?.openingHours?.day}</span>
                            </div>
                            <div className="hover:text-secondary transition-all duration-1000">
                                <span className="inline-block ml-2 font-extralight">{footer?.openingHours?.hour}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <a href={`https://github.com/ecanivrl`} target="_blank" rel="noreferrer">
                    <p className="text-center mt-10 font-extralight">
                    © 2022 All Rights Reserved By Free Html Templates
                </p>
                </a>
            </div>
        </div>
    );
};

export default Footer;