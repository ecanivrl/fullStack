import Image from 'next/image'
import React from 'react'
import Title from '../../components/ui/Title'

const Cart = () => {
    return (
        <div className='min-h-[calc(100vh_-_373px)] px-4 bg-red-500'>
            <div className='flex justify-between items-center flex-col md:flex-row'>
                <div className='min-h-[calc(100vh_-_373px)] flex flex-1 items-center p-10 overflow-x-auto scrollbar-none w-full -mt-20 sm:mt-0'>
                    <table className='w-full text-sm text-center text-gray-500  min-w-[1000px]'>
                        <thead className='text-xs text-gray-400 bg-gray-700 uppercase border-white border-b-8'>
                            <tr>
                                <th scope='col' className='py-3 px-6 hover:text-white'>PRODUCT</th>
                                <th scope='col' className='py-3 px-6 hover:text-white'>EXSTRAS</th>
                                <th scope='col' className='py-3 px-6 hover:text-white'>prices</th>
                                <th scope='col' className='py-3 px-6 hover:text-white'>QUANTITY</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='bg-primary border-gray-700 hover:bg-secondary transition-all'>
                                <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center'>
                                    <Image src="/images/pizza.png" alt="pizza" width={50} height={50} />
                                    <span>Good pizza</span>
                                </td>
                                <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>mayonez, acı sos, ketçap</td>
                                <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>$20</td>
                                <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>1</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='bg-primary min-h-[calc(100vh_-_393px)] flex flex-col justify-center text-white p-12
                md:w-auto -mt-24 sm:mt-0 md:text-start !text-center sm:mb-0 mb-6 rounded-xl border-[3px] border-secondary '>
                    <Title>Cart Total</Title>
                    <div className='mt-6'>
                        <b>Subtotal: </b>$20 <br />
                        <b className='inline-block my-1'>Discount:</b> $0.00 <br />
                        <b>Total: </b>$20
                    </div>
                    <div>
                        <button className='btn-primary mt-4 md:w-auto w-52'>CHECKOUT NOW!</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart