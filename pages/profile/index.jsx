import Image from "next/image";
import React, { useState } from "react";
import { MdElectricBike } from "react-icons/md";
import Account from "../../components/profile/Account"
import Order from "../../components/profile/Order";
import Password from "../../components/profile/Password";

const Profile = () => {
    const [tabs, setTabs] = useState(0);

    return (
        <div className={`${tabs === 2 ? "-mt-16" : ""}`}>
            <div className="flex px-10 min-h-[calc(100vh_-_233px)] flex-col md:flex-row py-20">
                <div className={"md:w-80 w-full flex-shrink-0  mx-auto"}>
                    <div className="relative flex flex-col items-center px-10 py-5 border border-secondary
                 border-b-0 lg:h-auto mt-[105px] lg:mt-0 h-[213px] ">
                        <Image
                            src="/images/cat.jpg"
                            alt="cat"
                            width={100}
                            height={100}
                            className="rounded-full"
                        />
                        <b className="text-2xl mt-1">Thiago</b>
                    </div>
                    <ul className="text-center">
                        <li
                            onClick={() => setTabs(0)}
                            className={`border border-secondary gap- w-full p-3 cursor-pointer
                         transition-all duration-500 ease-in ${tabs === 0 && "bg-secondary text-white"
                                }`}
                        >
                            <i className="fa fa-home"></i>
                            <button className="ml-1">Account</button>
                        </li>
                        <li
                            onClick={() => setTabs(1)}
                            className={`border border-secondary gap- w-full p-3 cursor-pointer
                         transition-all duration-500 ease-in ${tabs === 1 && "bg-secondary text-white"
                                }`}
                        >
                            <i className="fa fa-key"></i>
                            <button className="ml-1">Password</button>
                        </li>
                        <li
                            onClick={() => setTabs(2)}
                            className={`border border-secondary gap- w-full p-3 cursor-pointer
                         transition-all duration-500 ease-in ${tabs === 2 && "bg-secondary text-white"
                                }`}
                        >
                            <button>
                                {" "}
                                <MdElectricBike />
                            </button>
                            <button className="ml-1">Orders</button>
                        </li>
                        <li
                            onClick={() => setTabs(3)}
                            className={`border border-secondary gap- w-full p-3 cursor-pointer
                         transition-all duration-500 ease-in ${tabs === 3 && "bg-secondary text-white"
                                }`}
                        >
                            <i className="fa fa-sign-in"></i>
                            <button className="ml-1">Exit</button>
                        </li>
                    </ul>
                </div>
                {tabs === 0 && (<Account />)}
                {tabs === 1 && (<Password />)}
            </div>
            {tabs === 2 && (<Order />)}

        </div>
    );
};

export default Profile;
