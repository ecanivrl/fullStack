import React, { useState, useEffect } from 'react'
import Title from '../ui/Title'
import { useSession } from "next-auth/react"
import axios from 'axios'

const Order = () => {
    const [orders, setOrders] = useState([]);
    const [currentUser, setCurrentUser] = useState([]);

    const { data: session } = useSession();
    useEffect(() => {
        const getOrders = async () => {
            try {
                const res = await axios.get(
                    `${process.env.NEXT_PUBLIC_API_URL}/orders`
                );
                setOrders(
                    res.data.filter((order) => order.customer === currentUser?.fullName)
                );
            } catch (err) {
                console.log(err);
            }
        };
        getOrders();
    }, [currentUser]);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users`);
                setCurrentUser(
                    res.data.filter((user) => user.email === session.user.email)[0]
                );
            } catch (err) {
                console.log(err);
            }
        };
        getUsers();
    }, [session]);
    return (
        <div className='overflow-x-auto mx-auto w-full lg:-mt-24 mt-0'>
            <form className='sm:p-5 p-0 flex-1 mb-5 w-[1200px]'>
            <Title className="text-center mt-2 mx-auto mb-2">Orders</Title>
                <div className='overflow-x-auto scrollbar-none  mx-auto h-[378px] overflow-y-scroll'>
                    <table className='text-sm text-center text-gray-500 mx-auto rounded-t-2xl w-full'>
                    <thead className='text-xs text-gray-400 bg-gray-700 uppercase border-white border-b-8 '>
                        <tr>
                            <th scope='col' className='py-3 px-6 hover:text-white'>ID</th>
                            <th scope='col' className='py-3 px-6 hover:text-white'>ADDRESS</th>
                            <th scope='col' className='py-3 px-6 hover:text-white'>DATE</th>
                            <th scope='col' className='py-3 px-6 hover:text-white'>TOTAL</th>
                            <th scope='col' className='py-3 px-6 hover:text-white'>STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                            {orders.map((order) => (
                                <tr key={order?._id} className='bg-gray-200 hover:bg-secondary transition-all border-b-gray-700 border-b-2'>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center'>
                                        <span>{order?._id.substring(0, 6)}...</span>
                            </td>
                                    <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>{order?.customer}</td>
                                    <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>23.12.2022</td>
                                    <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>${order?.total}</td>
                                    <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>{status[order?.status]}</td>
                        </tr>
                            ))}


                    </tbody>
                </table>
            </div>

        </form>
        </div>

    )
}

export default Order





