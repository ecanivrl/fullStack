import Image from 'next/image'
import React from 'react'
import Title from '../../components/ui/Title'
import { useSelector, useDispatch } from 'react-redux'
import { reset } from "../../redux/cartSlice"
import { IoIosRestaurant } from "react-icons/io"
import { GiGlassShot } from "react-icons/gi"
import Link from 'next/link'

const Cart = () => {

    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()

    return (

        <>
            {cart.products.length > 0 ? (
                <div className='w-full px-5 flex lg:flex-row  flex-col justify-center items-center gap-5 h-screen lg:h-[430px]'>
                    <div className='lg:w-3/4 w-full overflow-x-auto custom-vertical-scrollbar pb-3'>
                        <table className='w-full text-sm text-center text-gray-500  min-w-[640px]  '>
                            <thead className='text-xs text-gray-400 bg-secondary uppercase border-white border-b-8'>
                                <tr>
                                    <th scope='col' className='py-3 px-6 hover:text-white'>PRODUCT</th>
                                    <th scope='col' className='py-3 px-6 hover:text-white'>EXSTRAS</th>
                                    <th scope='col' className='py-3 px-6 hover:text-white'>prices</th>
                                    <th scope='col' className='py-3 px-6 hover:text-white'>QUANTITY</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.products.map((product) => (
                                    <tr key={product.id} className='bg-primary border-gray-700 hover:bg-secondary transition-all'>
                                <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center'>
                                    <Image src="/images/pizza.png" alt="pizza" width={50} height={50} />
                                            <span>{product.name}</span>
                                </td>
                                        <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                                            {product.extras.map((item) => (
                                                <span key={item.id} >{item.text},</span>
                                            ))}
                                        </td>
                                        <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>$-{product.price}</td>
                                        <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>{product.quantity}</td>
                            </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className='sm:w-72 bg-primary w-full text-white p-5 rounded-xl border-[3px] text-center hover:border-spacing-3 hover:border-secondary'>
                        <Title>Cart Total</Title>
                        <div className='mt-6'>
                            <b>Subtotal: </b>$-{cart.total} <br />
                            <b className='inline-block my-1'>Discount:</b> $0.00 <br />
                            <b>Total: </b>$-{cart.total}
                        </div>
                        <div>
                            <button className='btn-primary mt-4 md:w-auto w-52'
                                onClick={() => dispatch(reset())}
                            >CHECKOUT NOW!</button>

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

export default Cart