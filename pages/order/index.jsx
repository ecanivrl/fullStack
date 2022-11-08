import Image from 'next/image'

const Index = () => {
    return (
        <div className='overflow-auto'>
            <div className='flex justify-center items-center flex-col p-10 min-h-[calc(100vh_-_373px)] min-w-[1000px]'>
                <div className='flex flex-1 items-center  w-full max-h-28  '>
                    <table className='w-full text-sm text-center text-gray-500 '>
                        <thead className='text-xs text-gray-400 bg-gray-700 uppercase border-white border-b-8'>
                            <tr>
                                <th scope='col' className='py-3 px-6 hover:text-white'>ORDER ID</th>
                                <th scope='col' className='py-3 px-6 hover:text-white'>CUSTOMER</th>
                                <th scope='col' className='py-3 px-6 hover:text-white'>ADDRESS</th>
                                <th scope='col' className='py-3 px-6 hover:text-white'>TOTAL</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='bg-primary border-gray-700 hover:bg-secondary transition-all'>
                                <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center'>
                                    0565S654D
                                </td>
                                <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>Ercan VAROL</td>
                                <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>Pervari</td>
                                <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>$20</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='flex justify-between w-full p-10 bg-secondary mt-6'>
                    <div className='relative flex flex-col animate-bounce'>
                        <Image src="/images/paid.png" alt="paid" width={40} height={40} objectFit="contain" />
                        <span>PAYMENT</span>
                    </div>
                    <div className='relative flex flex-col animate-bounce'>
                        <Image src="/images/bake.png" alt="paid" width={40} height={40} objectFit="contain" />
                        <span>PREPARİNG</span>
                    </div>
                    <div className='relative flex flex-col animate-bounce'>
                        <Image src="/images/bike.png" alt="paid" width={40} height={40} objectFit="contain" />
                        <span>ONE THE WAY</span>
                    </div>
                    <div className='relative flex flex-col animate-bounce'>
                        <Image src="/images/delivered.png" alt="paid" width={40} height={40} objectFit="contain" />
                        <span>DELIVERED</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index