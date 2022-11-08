import React from 'react'
import Title from '../ui/Title'

const Order = () => {
    return (
        <form
            className="-mt-10 pb-20">
            <Title className="text-center mt-2 mx-auto mb-2">Orders</Title>
            <div className='overflow-x-auto w-[80%] mx-auto '>
                <table className='w-full text-sm text-center text-gray-500  min-w-[1000px] rounded-t-2xl'>
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
                        <tr className='bg-gray-200 hover:bg-secondary transition-all border-b-gray-700 border-b-2'>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center'>
                                <span>63107...</span>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>Adana</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>01-09-2022</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>$18</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>Preparing</td>
                        </tr>
                        <tr className='bg-gray-200 hover:bg-secondary transition-all border-b-gray-700 border-b-2'>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center'>
                                <span>63107...</span>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>Adana</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>01-09-2022</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>$18</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>Preparing</td>
                        </tr>
                        <tr className='bg-gray-200 hover:bg-secondary transition-all border-b-gray-700 border-b-2'>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center'>
                                <span>63107...</span>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>Adana</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>01-09-2022</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>$18</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>Preparing</td>
                        </tr>
                        <tr className='bg-gray-200 hover:bg-secondary transition-all border-b-gray-700 border-b-2'>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center'>
                                <span>63107...</span>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>Adana</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>01-09-2022</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>$18</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>Preparing</td>
                        </tr>
                        <tr className='bg-gray-200 hover:bg-secondary transition-all border-b-gray-700 border-b-2'>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center'>
                                <span>63107...</span>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>Adana</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>01-09-2022</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>$18</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>Preparing</td>
                        </tr>
                        <tr className='bg-gray-200 hover:bg-secondary transition-all border-b-gray-700 border-b-2'>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center'>
                                <span>63107...</span>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>Adana</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>01-09-2022</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>$18</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>Preparing</td>
                        </tr>
                        <tr className='bg-gray-200 hover:bg-secondary transition-all border-b-gray-700 border-b-2'>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center'>
                                <span>63107...</span>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>Adana</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>01-09-2022</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>$18</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>Preparing</td>
                        </tr>
                        <tr className='bg-gray-200 hover:bg-secondary transition-all border-b-gray-700 border-b-2'>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center'>
                                <span>63107...</span>
                            </td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>Adana</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>01-09-2022</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>$18</td>
                            <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>Preparing</td>
                        </tr>


                    </tbody>
                </table>
            </div>

        </form>
    )
}

export default Order





