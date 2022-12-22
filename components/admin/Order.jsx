import Image from 'next/image'
import React from 'react'
import Title from '../ui/Title'

const Order = () => {
    return (
        <div className='overflow-x-auto custom-vertical-scrollbar max-h-[440px] mx-auto w-full'>
            <table className='m-5 text-sm text-center text-gray-500 mx-auto rounded-t-2xl w-[670px] md:w-[1000px] overflow-x-auto custom-vertical-scrollbar '>
                <thead className='sticky top-0 text-xs text-primary bg-secondary uppercase border-white border-b-8 '>
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
                    <tr className='bg-primary hover:bg-secondary transition-all border-b-white border-b-2'>
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
                    <tr className='bg-primary hover:bg-secondary transition-all border-b-white border-b-2'>
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
                    <tr className='bg-primary hover:bg-secondary transition-all border-b-white border-b-2'>
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
                    <tr className='bg-primary hover:bg-secondary transition-all border-b-white border-b-2'>
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
                    <tr className='bg-primary hover:bg-secondary transition-all border-b-white border-b-2'>
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
                    <tr className='bg-primary hover:bg-secondary transition-all border-b-white border-b-2'>
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
                    <tr className='bg-primary hover:bg-secondary transition-all border-b-white border-b-2'>
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
                    <tr className='bg-primary hover:bg-secondary transition-all border-b-white border-b-2'>
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
