import Image from "next/image";
import React, { useState, useEffect } from "react";
import { MdElectricBike } from "react-icons/md";
import Account from "../../components/profile/Account"
import Order from "../../components/profile/Order";
import Password from "../../components/profile/Password";
import { signOut, getSession, useSession } from "next-auth/react"
import { useRouter } from "next/router"
import { toast } from "react-toastify";
import axios from "axios";

const Profile = ({ session }) => {
    const [tabs, setTabs] = useState(0);
    const { push } = useRouter()

    const handleSıgnOut = () => {
        if (confirm("Are you sure you want to sign out?")) {
            signOut({ redirect: false });
            push("/auth/login");
        }
    }

    // useEffect(() => {
    //     if (!session) {
    //         push("/auth/login");
    //     }
    // }, [session, push]);

    return (
        <div className={`${tabs === 2 ? "" : ""}`}>
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
                            onClick={handleSıgnOut}
                            className="border border-secondary gap- w-full p-3 cursor-pointer
                         transition-all duration-500 ease-in  hover:bg-secondary/30"

                        >
                            <i className="fa fa-sign-in"></i>
                            <button className="ml-1">Exit</button>
                        </li>
                    </ul>
                </div>
                {tabs === 0 && (<Account />)}
                {tabs === 1 && (<Password />)}
                {tabs === 2 && (<Order />)}
            </div>
        </div>
    );
};

export async function getServerSideProps({ req, params }) {
    const session = await getSession({ req });

    if (!session) {
        return {
            redirect: {
                destination: "/auth/login",
                permanent: false,
            },
        };
    }

    const user = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/users/${params.id}`
    );

    return {
        props: {
            session,
        },
    };
}

export default Profile;
