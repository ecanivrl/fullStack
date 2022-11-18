import Image from 'next/image'
import React from 'react'
import Title from '../ui/Title'

const Products = () => {
    return (
        <div className='overflow-x-auto h-60 mx-auto w-full'>
            <Title className="text-center mt-2 mx-auto mb-2">Products</Title>
            <table className='text-sm text-center text-gray-500 mx-auto rounded-t-2xl w-[1200px]'>
                <thead className='text-xs text-gray-400 bg-gray-700 uppercase border-white border-b-8 '>
                    <tr>
                        <th scope='col' className='py-3 px-6 hover:text-white'>IMAGE</th>
                        <th scope='col' className='py-3 px-6 hover:text-white'>ID</th>
                        <th scope='col' className='py-3 px-6 hover:text-white'>TİTLE</th>
                        <th scope='col' className='py-3 px-6 hover:text-white'>PRİCE</th>
                        <th scope='col' className='py-3 px-6 hover:text-white'>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='bg-gray-200 hover:bg-secondary transition-all border-b-gray-700 border-b-2'>
                        <td className='py-4 px-6 font-medium whitespace-nowrap relative hover:text-white flex items-center gap-x-1 justify-center'>
                            <Image src="/images/pizza.png" alt="pizza" height={50} width={50} />
                        </td>
                        <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>63107...</td>
                        <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>Good Pizza</td>
                        <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>$10</td>
                        <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                            <button className='btn-primary !bg-danger'>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Products