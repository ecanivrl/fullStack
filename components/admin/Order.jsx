import Image from 'next/image'
import React from 'react'
import Title from '../ui/Title'

const Order = () => {
    return (
        <div className='overflow-x-auto h-60 mx-auto w-full'>
            <Title className="text-center mt-2 mx-auto mb-2">Orders</Title>
            <table className='text-sm text-center text-gray-500 mx-auto rounded-t-2xl w-[1200px]'>
                <thead className='text-xs text-gray-400 bg-gray-700 uppercase border-white border-b-8 '>
                    <tr>
                        <th scope='col' className='py-3 px-6 hover:text-white'>PRODUCT ID</th>
                        <th scope='col' className='py-3 px-6 hover:text-white'>CUSTOMER</th>
                        <th scope='col' className='py-3 px-6 hover:text-white'>TOTAL</th>
                        <th scope='col' className='py-3 px-6 hover:text-white'>PAYMENT</th>
                        <th scope='col' className='py-3 px-6 hover:text-white'>STATUS</th>
                        <th scope='col' className='py-3 px-6 hover:text-white'>ACTİON</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='bg-gray-200 hover:bg-secondary transition-all border-b-gray-700 border-b-2'>
                        <td className='py-4 px-6 font-medium whitespace-nowrap relative hover:text-white flex items-center gap-x-1 justify-center'>
                            6310700...
                        </td>
                        <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>Thiago eco</td>
                        <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>$12</td>
                        <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>$Cash</td>
                        <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>Preparing</td>
                        <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                            <button className='btn-primary !bg-success'>Next Stage</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}

export default Order
