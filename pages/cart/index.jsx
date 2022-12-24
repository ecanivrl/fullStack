import Image from 'next/image'
import React from 'react'
import Title from '../../components/ui/Title'
import { useSelector, useDispatch } from 'react-redux'
import { reset } from "../../redux/cartSlice"
import { IoIosRestaurant } from "react-icons/io"
import { GiGlassShot } from "react-icons/gi"
import Link from 'next/link'
import axios from 'axios'
import { useSession } from "next-auth/react"
import { toast } from 'react-toastify'
import { useRouter } from 'next/router';


const Cart = ({ userList }) => {
    const { data: session } = useSession();

    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch()

    const user = userList?.find((user) => user.email === session?.user?.email);
    const router = useRouter();

    const newOrder = {
        customer: user?.fullName,
        address: user?.address ? user?.address : "No address",
        total: cart.total,
        method: 0,
    };

    const createOrder = async () => {
        try {
            if (session) {
                if (confirm("Are you sure to order?")) {
                    const res = await axios.post(
                        `${process.env.NEXT_PUBLIC_API_URL}/orders`,
                        newOrder
                    );
                    if (res.status === 201) {
                        router.push(`/order/${res.data._id}`);
                        dispatch(reset());
                        toast.success("Order created successfully", {
                            autoClose: 1000,
                        });
                    }
                }
            } else {
                toast.error("Giriş Yapmadan Ürün Satın alamazsınız. Lütfen Giriş Yapın", {
                    autoClose: 1000,
                });
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (

        <>
            {cart.products.length > 0 ? (
                <div className='w-full flex flex-col justify-center items-center'>
                    <Title className="mt-5">Cart Total</Title>
                    <div className='w-full px-5 flex flex-col md:flex-row justify-center items-center gap-5 min-h-[500px]'>
                        <div className='sm:w-72 bg-primary w-full text-white p-5 rounded-xl border-[3px] text-center hover:border-spacing-3 hover:border-secondary'>
                            <Title>Cart Total</Title>
                            <div className='mt-6'>
                                <b>Subtotal: </b>$-{cart.total} <br />
                                <b className='inline-block my-1'>Discount:</b> $0.00 <br />
                                <b>Total: </b>$-{cart.total}
                            </div>
                            <div>
                                <button className='btn-primary mt-4 md:w-auto w-52'
                                    onClick={createOrder}
                                >CHECKOUT NOW!</button>

                            </div>
                        </div>
                        <div className='lg:w-3/4 w-full pb-3'>
                            <div className='overflow-y-auto custom-vertical-scrollbar max-h-[300px] pb-2'>
                                <table className=' md:w-[90%] w-[98%] mx-auto text-sm text-center text-gray-500 overflow--auto custom-vertical-scrollbar '>
                                    <thead className='sticky top-0 z-10 text-xs text-black bg-secondary uppercase border-white border-b-8'>
                                <tr>
                                    <th scope='col' className='py-3 px-6 hover:text-white'>PRODUCT</th>
                                    <th scope='col' className='py-3 px-6 hover:text-white'>EXSTRAS</th>
                                    <th scope='col' className='py-3 px-6 hover:text-white'>prices</th>
                                    <th scope='col' className='py-3 px-6 hover:text-white'>QUANTITY</th>
                                </tr>
                            </thead>
                            <tbody>
                                        {cart.products.map((product, index) => (
                                            <tr key={index} className='bg-primary hover:bg-secondary border-b-white border-b-2 transition-all'>
                                <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center'>
                                                    <Image src={product?.img} alt="pizza" width={50} height={50} />
                                            <span>{product.name}</span>
                                </td>
                                        <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                                                    {product.extras.map((item, index) => (
                                                        <span key={index} >{item.text},</span>
                                            ))}
                                        </td>
                                                <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>$-{product?.price}</td>
                                                <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>{product?.quantity}</td>
                            </tr>
                                ))}
                            </tbody>
                                </table>
                            </div>

                        </div>

                    </div>
                </div>
            ) :
                (
                    <div className='w-full h-[430px] flex flex-col gap-2 justify-center items-center p-10 relative'>
                        <div className='w-full h-full border-2 border-secondary flex items-center justify-center p-5'>
                            <div className='w-full h-full border-2 border-primary p-5 flex flex-col justify-center items-center xef'>
                                <h1 className='mt-5 text-primary text-2xl'>Sepette Hiç Ürün Yok</h1>
                                <Link href={"/menu"}>
                                    <div className='transition-all duration-150  w-full h-full'>
                                        <div className='cursor-pointer flex items-center justify-center relative hover:-z-10 bg-white border-secondary w-full
                                 h-full hover:gap-x-36 
                                     '>
                                            <IoIosRestaurant size={100} className="text-primary" />
                                            <GiGlassShot size={100} className="text-primary" />
                                            <span className='absolute text-primary text-2xl border-b-2 -z-10 border-secondary'>Sipariş ver</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}


export const getServerSideProps = async () => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users`);

    return {
        props: {
            userList: res.data ? res.data : [],
        },
    };
};
export default Cart