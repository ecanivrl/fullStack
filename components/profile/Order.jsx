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
        <div className='mx-auto md:mx-5 w-full overflow-auto custom-vertical-scrollbar lg:-mt-24'>
            <Title className="text-center mt-6 mx-auto">Order</Title>
            <div className='w-full max-h-[400px] overflow-auto custom-vertical-scrollbar px-2'>
                <table className=' text-sm text-center text-gray-500 mx-auto rounded-t-2xl md:w-[97%] w-full m-5'>
                    <thead className='sticky top-0 z-10 text-xs text-primary bg-secondary uppercase border-white border-b-8 '>
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
                                <tr key={order?._id} className='bg-primary hover:bg-secondary transition-all border-b-white border-b-2'>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center'>
                                        <span>{order?._id.substring(0, 6)}...</span>
                            </td>
                                    <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>{order?.customer}</td>
                                    <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>23.12.2022</td>
                                    <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>${order?.total}</td>
                                    <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>{order?.status}</td>
                        </tr>
                            ))}


                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default Order





